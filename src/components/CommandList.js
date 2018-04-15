import React, { Component } from 'react';
import './CommandList.css';
import Marked from 'marked';

const cmd_src = 'https://raw.githubusercontent.com/NetworkFrontier/LinBot/temp-master-gwl/docs/cmds_new.json';
const request_url = 'https://github.com/NetworkFrontier/LinBot/labels/request';

const commandsListImg = require('../images/icon-command_list-white.svg');
const featureImg = require('../images/icon-feature.svg');
const arrowDown = require('../images/icon-arrow-down-white.svg');

Marked.Renderer.prototype.paragraph = (x) => x;

// interface CommandData {
//     Aliases: string[];
//     Description: string;
//     Usage: string[];
//     Module: string;
//     Submodule: string;
//     Requirements: string[];
//     Options: string;
// }
// interface State {
//     data: { [key: string]: CommandData[] };
//     selected: string;
//     search: string;
// }

export default class CommandList extends Component {

    constructor() {
        super();
        this.state = { data: {}, search: '', selected: 'all' };
        this.loadData(cmd_src);
	}
	
    loadData(url) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                const data = JSON.parse(xhttp.responseText);
                this.setState({ data: data });
            }
        };
        xhttp.open('GET', url, true);
        xhttp.send();
    }

    getSelectedClass(key) {
        if (this.state.selected === key) {
            return 'selected';
        }
        return '';
    }

    getRows(input) {
        const usages = [];
        input.forEach(x => {
            usages.push(<span key={x} className="cell-part">{x}</span>);
        });
        return usages;
    }
    searchFilter(x) {
        if (this.state.search === '') {
            return true;
        }
        return x.Aliases.some(el => el.indexOf(this.state.search) !== -1)
            || x.Description.toLowerCase().indexOf(this.state.search) !== -1;
    }

    renderRequirements(c) {
        return (
            <section className="description-warning">
                <span>Requires</span>
                <section className="required-permissions">
                {
                    c.Requirements.map((r,key) => (<span
						key={`req-${key}`}
                        className="permission"
                    >
                        {r}
                    </span>))
                }
                </section>
            </section >
        );
    }

    renderOptions(c) {
        return [
            (<span key='Options-0'> Options </span>),
            (<span key='Options-1'dangerouslySetInnerHTML={{ __html: Marked.parse(c.Options) }} />)
        ];
    }
    render() {
        if (Object.keys(this.state.data).length === 0) {
            return (<div className="command-list-container">Loading...</div>);
        }

        const modules = [];

        Object.keys(this.state.data).forEach(key => {
            const l = key;
            modules.push((
                <div
                    key={l}
                    className={l.toLowerCase() + ' module-name ' + this.getSelectedClass(l)}
                    onClick={() => this.setState({ selected: l })}
                >
                    <input type="checkbox" checked={l === this.state.selected || this.state.selected === 'all'} />
                    {l}
                </div>));
        });

        var cmds = [];
        if (this.state.selected !== 'all') {
            cmds = this.state.data[this.state.selected];
        } else {
            Object.keys(this.state.data).forEach(key => cmds = cmds.concat(this.state.data[key]));
        }

        return (
            <div className="commands-list-container">
                <div className="cl-headers-wrap">
                    <div className="cl-header">
                        <h2>
                            <img src={commandsListImg} alt=""/>
                            <span>Command List</span>
                        </h2>
                        <a className="suggest-feature" href={request_url} target="_blank">
                            <button>Suggest a feature/command <img src={featureImg} alt=""/></button>
                        </a>
                    </div>
                    <div className="cl-sub-header">
                        <div>
                            <div className="modules-header">
                                Modules
                                <img src={arrowDown} alt=""/>
                            </div>
                            <div className="modules-all">
                                <button
                                    key={'all'}
                                    className={'all module-name ' + this.getSelectedClass('all')}
                                    onClick={() => this.setState({ selected: 'all' })}
                                >
                                    <input type="checkbox" checked={this.state.selected === 'all'} />
                                    Select all Modules
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="search-wrap">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    value={this.state.search}
                                    onChange={(x) => this.setState({ search: x.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="modules">
                    {modules}
                </div>

                <div className="commands">
                    <div className="commands-header">
                        <p>Command Name</p>
                        <p>Description</p>
                        <p>Usage</p>
                    </div>
                    {cmds.filter(x => this.searchFilter(x)).map((x) =>
                        <div className="command" key={x.Aliases[0]}>
                            <div className="command-name">
                                <span>{x.Aliases[0]}</span>
                                <span
                                    className={'module ' + x.Module.toString().toLowerCase()}
                                >
                                    {this.state.selected === 'all' ? x.Module : x.Submodule}
                                </span>
                            </div>
                            <div className="description">
                                <section
                                    dangerouslySetInnerHTML={{
                                        __html: Marked.parse(x.Description)
                                    }}
                                />
                                {x.Options && this.renderOptions(x)}
                                {x.Requirements.length !== 0 && this.renderRequirements(x)}
                            </div>
                            <div className="usage">
                                <span className="cell-parts">
                                    {this.getRows(x.Usage)}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}