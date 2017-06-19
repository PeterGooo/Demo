"use strict";

/**
*https://en.wikipedia.org/wiki/Special:Random
*https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srwhat=text&srinfo=&srprop=snippet&srsearch={serach_text}
*
*search Input
*search List
**/

var RandomLink = React.createClass({
	displayName: "RandomLink",
	render: function render() {
		return React.createElement(
			"a",
			{ href: "https://en.wikipedia.org/wiki/Special:Random", target: "_tab" },
			React.createElement(
				"h1",
				null,
				"Get Random"
			)
		);
	}
});
var ResultRow = React.createClass({
	displayName: "ResultRow",
	rawMarkup: function rawMarkup() {
		return { __html: this.props.snippet };
	},
	render: function render() {
		return React.createElement(
			"li",
			null,
			React.createElement(
				"strong",
				null,
				React.createElement(
					"a",
					{ href: "https://en.wikipedia.org/wiki/" + this.props.title, target: "_tab" },
					this.props.title
				)
			),
			"-",
			React.createElement("span", { dangerouslySetInnerHTML: this.rawMarkup() })
		);
	}
});

var ResultList = React.createClass({
	displayName: "ResultList",
	render: function render() {
		var rows = [];
		this.props.wikis.forEach(function (wiki) {
			rows.push(React.createElement(ResultRow, { title: wiki.title, snippet: wiki.snippet }));
		});
		return React.createElement(
			"ul",
			null,
			rows
		);
	}
});

var SearchBar = React.createClass({
	displayName: "SearchBar",
	handleChange: function handleChange() {
		this.props.onUserInput(this.refs.searchTextInput.value);
	},
	render: function render() {
		return React.createElement(
			"p",
			null,
			React.createElement("input", {
				type: "text",
				placeholder: "Search...",
				ref: "searchTextInput",
				onChange: this.handleChange
			})
		);
	}
});

var WikiSearch = React.createClass({
	displayName: "WikiSearch",
	getInitialState: function getInitialState() {
		return {
			data: this.props.wikis
		};
	},
	loadWikis: function loadWikis(query) {
		$.ajax({
			url: 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srwhat=text&srinfo=&srprop=snippet&callback=?&srsearch=' + query,
			dataType: 'json',
			type: 'POST',
			headers: { 'Api-User-Agent': 'WhyIcannotGetApi/0.1' },
			cache: false,
			success: function (data) {
				this.setState({ searchText: query, data: data.query.search });
			}.bind(this),
			error: function (xhr, status, err) {
				console.error(query, status, err.toString());
			}.bind(this)
		});
	},
	handleUserInput: function handleUserInput(searchText) {
		this.loadWikis(searchText);
	},
	render: function render() {
		return React.createElement(
			"div",
			null,
			React.createElement(RandomLink, null),
			React.createElement(SearchBar, {
				onUserInput: this.handleUserInput
			}),
			React.createElement(ResultList, { wikis: this.state.data })
		);
	}
});

var WIKIS = [{
	"ns": 0,
	"title": "Meaning",
	"snippet": "<span class=\"searchmatch\">Meaning</span> may refer to: <span class=\"searchmatch\">Meaning</span> (existential), the worth of life in contemporary existentialism <span class=\"searchmatch\">Meaning</span> (linguistics), <span class=\"searchmatch\">meaning</span> which is communicated through"
}, {
	"ns": 0,
	"title": "Meaning of life (disambiguation)",
	"snippet": "life. (The) <span class=\"searchmatch\">Meaning</span> of Life may also refer to: Monty Python's The <span class=\"searchmatch\">Meaning</span> of Life, a 1983 film by Monty Python Monty Python's The <span class=\"searchmatch\">Meaning</span> of Life (album)"
}, {
	"ns": 0,
	"title": "Denotation",
	"snippet": "detonation. Denotation is a translation of a sign to its <span class=\"searchmatch\">meaning</span>, precisely to its literal <span class=\"searchmatch\">meaning</span>, more or less like dictionaries try to define it. Denotation"
}, {
	"ns": 0,
	"title": "Meaning (linguistics)",
	"snippet": "In linguistics, <span class=\"searchmatch\">meaning</span> is what the source or sender expresses, communicates, or conveys in their message to the observer or receiver, and what the receiver"
}, {
	"ns": 0,
	"title": "The Meaning of Peace",
	"snippet": "&quot;The <span class=\"searchmatch\">Meaning</span> of Peace&quot; (stylized as the <span class=\"searchmatch\">meaning</span> of peace) is a single by Japanese pop singer Koda Kumi and Korean pop singer BoA. The single debuted on"
}, {
	"ns": 0,
	"title": "Monty Python's The Meaning of Life",
	"snippet": "Python's The <span class=\"searchmatch\">Meaning</span> of Life (album). For the video game, see Monty Python's The <span class=\"searchmatch\">Meaning</span> of Life (video game). Monty Python's The <span class=\"searchmatch\">Meaning</span> of Life, also"
}, {
	"ns": 0,
	"title": "Meaning (existential)",
	"snippet": "In existentialism, <span class=\"searchmatch\">meaning</span> is understood as the worth of life.[citation needed] <span class=\"searchmatch\">Meaning</span> in existentialism is descriptive; therefore it is unlike typical"
}, {
	"ns": 0,
	"title": "The Meaning of Liff",
	"snippet": "The <span class=\"searchmatch\">Meaning</span> of Liff (UK Edition: ISBN 0-330-28121-6, US Edition: ISBN 0-517-55347-3) is a humorous dictionary of toponymy and etymology, written by Douglas"
}, {
	"ns": 0,
	"title": "Cinteteo",
	"snippet": "Iztac-Cinteotl (<span class=\"searchmatch\">meaning</span> white corn), Tlatlauhca-Cinteotl (<span class=\"searchmatch\">meaning</span> red corn), Cozauhca-Cinteotl (<span class=\"searchmatch\">meaning</span> yellow corn), Yayauhca-Cinteotl (<span class=\"searchmatch\">meaning</span> black corn)"
}, {
	"ns": 0,
	"title": "Meaning (House)",
	"snippet": "<span class=\"searchmatch\">Meaning</span> is the first episode of the third season of House and the forty-seventh episode overall. It aired on Fox on September 5, 2006.  Richard is a brain"
}];

ReactDOM.render(React.createElement(WikiSearch, { wikis: WIKIS }), document.getElementById('content'));