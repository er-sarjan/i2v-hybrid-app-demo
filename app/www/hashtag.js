/**
 * Created by Sarjan on 15-Oct-17.
 */

const svg = d3.select("svg"),
		width = +svg.attr("width"),
		height = +svg.attr("height");

const format = d3.format(",d");

const pack = d3.pack()
		.size([width, height])
		.padding(1);

// Get json data
const json = window.appInterface.getJson()[0];

// Filter data based on available tweet volume for bubbles
const classes = json.trends.filter(function(item) {
	return !!item.tweet_volume;
});

// Setup root for chart
const root = d3.hierarchy({children: classes})
		.sum(function(d) { return d.tweet_volume; });

// Create multiple nodes for bubble and text
const node = svg.selectAll(".node")
		.data(pack(root).leaves())
		.enter().append("g")
		.attr("class", "node")
		.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

// Create bubbles
node.append("circle")
		.attr("id", function(d) { return d.data.name.replace(/[ #]/g, ''); })
		.attr("r", function(d) { return d.r; })
		.style("fill", function() { return d3.rgb(119, 206, 195); })
		.on('click', function() {
			window.appInterface.hashTagClick(this.__data__.data.name);
		});

// Setup for view of bubbles on ui
node.append("clipPath")
		.attr("id", function(d) { return "clip-" + d.data.name.replace(/[ #]/g, ''); })
		.append("use")
		.attr("xlink:href", function(d) { return "#" + d.data.name.replace(/[ #]/g, ''); });

// Set hash tag name as a text on bubble
node.append("text")
		.attr("clip-path", function(d) { return "url(#clip-" + d.data.name.replace(/[ #]/g, '') + ")"; })
		.selectAll("tspan")
		.data(function(d) { return [d.data.name] })
		.enter()
		.append("tspan")
		.attr("x", 0)
		.attr("y", function(d, i, nodes) { return 13 + (i - nodes.length / 2 - 0.5) * 10; })
		.text(function(d) { return d; })
		.style('fill', '#FFF')
		.style('font-size', 14)
		.on('click', function() {
			window.appInterface.hashTagClick(this.__data__);
		});

// Set title with name of hash tag and tweet volume
node.append("title")
		.text(function(d) { return d.data.name + "\n" + format(d.data.tweet_volume); });
