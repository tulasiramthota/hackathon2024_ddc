import arc_diagram from "../../assets/img/icons/common/list/arc_diagram.svg";
import area_graph from "../../assets/img/icons/common/list/area_graph.svg";
import bar_graph from "../../assets/img/icons/common/list/bar_graph.svg";
import box_plot from "../../assets/img/icons/common/list/box_plot.svg";
import brainstorm from "../../assets/img/icons/common/list/brainstorm.svg";
import bubble_chart from "../../assets/img/icons/common/list/bubble_chart.svg";
import bubble_map from "../../assets/img/icons/common/list/bubble_map.svg";
import bullet_chart from "../../assets/img/icons/common/list/bullet_chart.svg";
import calendar from "../../assets/img/icons/common/list/calendar.svg";
import candlestick_chart from "../../assets/img/icons/common/list/candlestick_chart.svg";
import chord_diagram from "../../assets/img/icons/common/list/chord_diagram.svg";
import choropleth_map from "../../assets/img/icons/common/list/choropleth_map.svg";
import circle_packing from "../../assets/img/icons/common/list/circle_packing.svg";
import connection_map from "../../assets/img/icons/common/list/connection_map.svg";
import donut_chart from "../../assets/img/icons/common/list/donut_chart.svg";
import point_map from "../../assets/img/icons/common/list/point_map.svg";
import dot_matrix_chart from "../../assets/img/icons/common/list/dot_matrix_chart.svg";
import error_bars from "../../assets/img/icons/common/list/error_bars.svg";
import flow_map from "../../assets/img/icons/common/list/flow_map.svg";
// import gantt_chart from '../../assets/img/icons/common/list/gantt_chart.svg'
import heat_map from "../../assets/img/icons/common/list/heat_map.svg";
import line_graph from "../../assets/img/icons/common/list/line_graph.svg";
import marimekko_chart from "../../assets/img/icons/common/list/marimekko_chart.svg";
import multiset_bar_chart from "../../assets/img/icons/common/list/multiset_bar_chart.svg";
import network_diagram from "../../assets/img/icons/common/list/network_diagram.svg";
import nightingale_rose_chart from "../../assets/img/icons/common/list/nightingale_rose_chart.svg";
import non_ribbon_chord_diagram from "../../assets/img/icons/common/list/non_ribbon_chord_diagram.svg";
import parallel_coordinates from "../../assets/img/icons/common/list/parallel_coordinates.svg";
import parallel_sets from "../../assets/img/icons/common/list/parallel_sets.svg";
import pictogram_chart from "../../assets/img/icons/common/list/pictogram_chart.svg";
import pie_chart from "../../assets/img/icons/common/list/pie_chart.svg";
import population_pyramid from "../../assets/img/icons/common/list/population_pyramid.svg";
import proportional_area_chart from "../../assets/img/icons/common/list/proportional_area_chart.svg";
import radar_chart from "../../assets/img/icons/common/list/radar_chart.svg";
import radial_bar_chart from "../../assets/img/icons/common/list/radial_bar_chart.svg";
import radial_column_chart from "../../assets/img/icons/common/list/radial_column_chart.svg";
import sankey_diagram from "../../assets/img/icons/common/list/sankey_diagram.svg";
import scatterplot from "../../assets/img/icons/common/list/scatterplot.svg";
import span_chart from "../../assets/img/icons/common/list/span_chart.svg";
import condegram_spiral_plot from "../../assets/img/icons/common/list/condegram_spiral_plot.svg";
import stacked_area_graph from "../../assets/img/icons/common/list/stacked_area_graph.svg";
import stacked_bar_graph from "../../assets/img/icons/common/list/stacked_bar_graph.svg";
import stream_graph from "../../assets/img/icons/common/list/stream_graph.svg";
import sunburst_diagram from "../../assets/img/icons/common/list/sunburst_diagram.svg";
import tally_chart from "../../assets/img/icons/common/list/tally_chart.svg";
import timeline from "../../assets/img/icons/common/list/timeline.svg";
import time_table from "../../assets/img/icons/common/list/time_table.svg";
import tree_diagram from "../../assets/img/icons/common/list/tree_diagram.svg";
import treemap from "../../assets/img/icons/common/list/treemap.svg";
import venn_diagram from "../../assets/img/icons/common/list/venn_diagram.svg";
import violin_plot from "../../assets/img/icons/common/list/violin_plot.svg";
import word_cloud from "../../assets/img/icons/common/list/word_cloud.svg";

const GraphFileList = [
  {
    icon: arc_diagram,
    name: "Arc Graph",
    graph_types: "Network Diagram",
    graph : 'ARC'
  },
  {
    icon: area_graph,
    name: "Area Graph",
    graph_types: "Data Over Time",
  },
  {
    icon: bar_graph,
    name: "Bar Chart",
    graph_types: "Comparisons",
  },
  {
    icon: box_plot,
    name: "Box &amp; Whisker Plot",
    graph_types: "Comparisons,Range",
  },
  {
    icon: brainstorm,
    name: "Brainstorm",
    graph_types: "Relationships",
  },
  {
    icon: bubble_chart,
    name: "Bubble Chart",
    graph_types: "Comparisons,Proportions,Relationships,Data Over Time",
    graph : 'FLOATING_BUBBLES'
  },
  {
    icon: bubble_map,
    name: "Bubble Map",
    graph_types: "Proportions,Location",
    graph : 'BUBBLES'
  },
  {
    icon: bullet_chart,
    name: "Bullet Graph",
    graph_types: "Comparisons,Range",
    graph : 'BULLET_GAUGE'
  },
  {
    icon: calendar,
    name: "Calendar",
    graph_types: "Data Over Time",
  },
  {
    icon: candlestick_chart,
    name: "Candlestick Chart",
    graph_types: "Data Over Time,Range",
  },
  {
    icon: chord_diagram,
    name: "Chord Diagram",
    graph_types: "Comparisons,Relationships",
  },
  {
    icon: choropleth_map,
    name: "Choropleth Map",
    graph_types: "Comparisons,Location",
  },
  {
    icon: circle_packing,
    name: "Circle Packing",
    graph_types: "Proportions,Hierarchy",
  },
  {
    icon: connection_map,
    name: "Connection Map",
    graph_types: "Relationships,Location",
  },
  {
    icon: donut_chart,
    name: "Donut Chart",
    graph_types: "Comparisons,Proportions,Part-to-a-whole",
    graph : 'DONUT'
  },
  {
    icon: point_map,
    name: "Dot Map",
    graph_types: "Location",
  },
  {
    icon: dot_matrix_chart,
    name: "Dot Matrix Chart",
    graph_types: "Comparisons,Proportions",
  },
  {
    icon: heat_map,
    name: "Heatmap",
    graph_types: "Comparisons,Relationships,Data Over Time",
    graph : 'HEAT_MAP'
  },
  {
    icon: line_graph,
    name: "Line Graph",
    graph_types: "Comparisons,Data Over Time,Range",
    graph : 'LINE_CHART'
  },
  {
    icon: line_graph,
    name: "Line Graph Line Trend: Attribute Values",
    graph_types: "Comparisons,Data Over Time,Range",
    graph : 'LINE_CHART_CONTINUOUS'
  },
  {
    icon: marimekko_chart,
    name: "Marimekko Chart",
    graph_types: "Comparisons,Proportions,Relationships,Part-to-a-whole",
  },
  {
    icon: multiset_bar_chart,
    name: "Combo Chart",
    graph_types: "Comparisons",
    graph : 'COMBO_CHART'
  },
  {
    icon: network_diagram,
    name: "Network Diagram",
    graph_types: "Relationships",
  },
  {
    icon: nightingale_rose_chart,
    name: "Nightingale Rose Chart",
    graph_types: "Comparisons,Proportions,Data Over Time",
  },
  {
    icon: non_ribbon_chord_diagram,
    name: "Non-ribbon Chord Diagram",
    graph_types: "Relationships",
  },
  {
    icon: parallel_coordinates,
    name: "Parallel Coordinates Plot",
    graph_types: "Comparisons,Relationships",
  },
  {
    icon: parallel_sets,
    name: "Parallel Sets",
    graph_types: "ComparisonsProportions",
  },
  {
    icon: pictogram_chart,
    name: "Pictogram Chart",
    graph_types: "Comparisons",
  },
  {
    icon: pie_chart,
    name: "Pie Chart",
    graph_types: "Comparisons,Proportions,Part-to-a-whole",
    graph : "PIE"
  },
  {
    icon: population_pyramid,
    name: "Population Pyramid",
    graph_types: "Comparisons",
  },
  {
    icon: proportional_area_chart,
    name: "Proportional Area",
    graph_types: "Comparisons,Proportions",
  },
  {
    icon: radar_chart,
    name: "Radar Chart",
    graph_types: "Comparisons,Relationships",
  },
  {
    icon: radial_bar_chart,
    name: "Radial Bar",
    graph_types: "Comparisons",
  },
  {
    icon: radial_column_chart,
    name: "Radial Column",
    graph_types: "Comparisons",
  },
  {
    icon: sankey_diagram,
    name: "Sankey Diagram",
    graph_types: "Proportions",
  },
  {
    icon: scatterplot,
    name: "Scatterplot Chart",
    graph_types: "Relationships",
    graph : 'SCATTERPLOT'
  },
  {
    icon: span_chart,
    name: "Span",
    graph_types: "Comparisons,Range",
  },
  {
    icon: condegram_spiral_plot,
    name: "Spiral Plot",
    graph_types: "Data Over Time",
  },
  {
    icon: stacked_area_graph,
    name: "Stacked Area",
    graph_types: "Comparisons,Data Over Time",
  },
  {
    icon: stacked_bar_graph,
    name: "Stacked Bar",
    graph_types: "Comparisons,Proportions,Part-to-a-whole",
    graph : 'UBER_BARS'
  },
  {
    icon: stream_graph,
    name: "Stream Graph",
    graph_types: "Data Over Time",
  },
  {
    icon: sunburst_diagram,
    name: "Sunburst Diagram",
    graph_types: "Hierarchy,Part-to-a-whole",
    graph:"SUN_BURST"
  },
  {
    icon: tally_chart,
    name: "Tally Chart",
    graph_types: "Comparisons",
  },
  {
    icon: timeline,
    name: "Timeline",
    graph_types: "Data Over Time",
  },
  {
    icon: time_table,
    name: "Pivot Table",
    graph_types: "Data Over Time",
    graph : 'PIVOT_TABLE'
  },
  {
    icon: tree_diagram,
    name: "Tree Diagram",
    graph_types: "Relationships,Hierarchy",
  },
  {
    icon: treemap,
    name: "Treemap",
    graph_types: "Comparisons,Proportions,Part-to-a-whole",
    graph : 'TREE_MAP'
  },
  {
    icon: venn_diagram,
    name: "Venn Diagram",
    graph_types: "Comparisons,Relationships",
  },
  {
    icon: violin_plot,
    name: "Violin Plot",
    graph_types: "Range",
  },
  {
    icon: word_cloud,
    name: "Word Cloud",
    graph_types: "Proportions",
    graph : 'WORD_CLOUD'
  },
];

export default GraphFileList;
