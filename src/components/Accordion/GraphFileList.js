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
    file: arc_diagram,
    graph_name: "Arc Graph",
    graph_types: "Network Diagram",
  },
  {
    file: area_graph,
    graph_name: "Area Graph",
    graph_types: "Data Over Time",
  },
  {
    file: bar_graph,
    graph_name: "Bar Chart",
    graph_types: "Comparisons",
  },
  {
    file: box_plot,
    graph_name: "Box &amp; Whisker Plot",
    graph_types: "Comparisons,Range",
  },
  {
    file: brainstorm,
    graph_name: "Brainstorm",
    graph_types: "Relationships",
  },
  {
    file: bubble_chart,
    graph_name: "Bubble Chart",
    graph_types: "Comparisons,Proportions,Relationships,Data Over Time",
  },
  {
    file: bubble_map,
    graph_name: "Bubble Map",
    graph_types: "Proportions,Location",
  },
  {
    file: bullet_chart,
    graph_name: "Bullet Graph",
    graph_types: "Comparisons,Range",
  },
  {
    file: calendar,
    graph_name: "Calendar",
    graph_types: "Data Over Time",
  },
  {
    file: candlestick_chart,
    graph_name: "Candlestick Chart",
    graph_types: "Data Over Time,Range",
  },
  {
    file: chord_diagram,
    graph_name: "Chord Diagram",
    graph_types: "Comparisons,Relationships",
  },
  {
    file: choropleth_map,
    graph_name: "Choropleth Map",
    graph_types: "Comparisons,Location",
  },
  {
    file: circle_packing,
    graph_name: "Circle Packing",
    graph_types: "Proportions,Hierarchy",
  },
  {
    file: connection_map,
    graph_name: "Connection Map",
    graph_types: "Relationships,Location",
  },
  {
    file: donut_chart,
    graph_name: "Donut Chart",
    graph_types: "Comparisons,Proportions,Part-to-a-whole",
  },
  {
    file: point_map,
    graph_name: "Dot Map",
    graph_types: "Location",
  },
  {
    file: dot_matrix_chart,
    graph_name: "Dot Matrix Chart",
    graph_types: "Comparisons,Proportions",
  },
  {
    file: heat_map,
    graph_name: "Heatmap",
    graph_types: "Comparisons,Relationships,Data Over Time",
  },
  {
    file: line_graph,
    graph_name: "Line Graph",
    graph_types: "Comparisons,Data Over Time,Range",
  },
  {
    file: marimekko_chart,
    graph_name: "Marimekko Chart",
    graph_types: "Comparisons,Proportions,Relationships,Part-to-a-whole",
  },
  {
    file: multiset_bar_chart,
    graph_name: "Multi-set Bar Chart",
    graph_types: "Comparisons",
  },
  {
    file: network_diagram,
    graph_name: "Network Diagram",
    graph_types: "Relationships",
  },
  {
    file: nightingale_rose_chart,
    graph_name: "Nightingale Rose Chart",
    graph_types: "Comparisons,Proportions,Data Over Time",
  },
  {
    file: non_ribbon_chord_diagram,
    graph_name: "Non-ribbon Chord Diagram",
    graph_types: "Relationships",
  },
  {
    file: parallel_coordinates,
    graph_name: "Parallel Coordinates Plot",
    graph_types: "Comparisons,Relationships",
  },
  {
    file: parallel_sets,
    graph_name: "Parallel Sets",
    graph_types: "ComparisonsProportions",
  },
  {
    file: pictogram_chart,
    graph_name: "Pictogram Chart",
    graph_types: "Comparisons",
  },
  {
    file: pie_chart,
    graph_name: "Pie Chart",
    graph_types: "Comparisons,Proportions,Part-to-a-whole",
  },
  {
    file: population_pyramid,
    graph_name: "Population Pyramid",
    graph_types: "Comparisons",
  },
  {
    file: proportional_area_chart,
    graph_name: "Proportional Area",
    graph_types: "Comparisons,Proportions",
  },
  {
    file: radar_chart,
    graph_name: "Radar Chart",
    graph_types: "Comparisons,Relationships",
  },
  {
    file: radial_bar_chart,
    graph_name: "Radial Bar",
    graph_types: "Comparisons",
  },
  {
    file: radial_column_chart,
    graph_name: "Radial Column",
    graph_types: "Comparisons",
  },
  {
    file: sankey_diagram,
    graph_name: "Sankey Diagram",
    graph_types: "Proportions",
  },
  {
    file: scatterplot,
    graph_name: "Scatterplot Chart",
    graph_types: "Relationships",
  },
  {
    file: span_chart,
    graph_name: "Span",
    graph_types: "Comparisons,Range",
  },
  {
    file: condegram_spiral_plot,
    graph_name: "Spiral Plot",
    graph_types: "Data Over Time",
  },
  {
    file: stacked_area_graph,
    graph_name: "Stacked Area",
    graph_types: "Comparisons,Data Over Time",
  },
  {
    file: stacked_bar_graph,
    graph_name: "Stacked Bar",
    graph_types: "Comparisons,Proportions,Part-to-a-whole",
  },
  {
    file: stream_graph,
    graph_name: "Stream Graph",
    graph_types: "Data Over Time",
  },
  {
    file: sunburst_diagram,
    graph_name: "Sunburst Diagram",
    graph_types: "Hierarchy,Part-to-a-whole",
  },
  {
    file: tally_chart,
    graph_name: "Tally Chart",
    graph_types: "Comparisons",
  },
  {
    file: timeline,
    graph_name: "Timeline",
    graph_types: "Data Over Time",
  },
  {
    file: time_table,
    graph_name: "Timetable",
    graph_types: "Data Over Time",
  },
  {
    file: tree_diagram,
    graph_name: "Tree Diagram",
    graph_types: "Relationships,Hierarchy",
  },
  {
    file: treemap,
    graph_name: "Treemap",
    graph_types: "Comparisons,Proportions,Part-to-a-whole",
  },
  {
    file: venn_diagram,
    graph_name: "Venn Diagram",
    graph_types: "Comparisons,Relationships",
  },
  {
    file: violin_plot,
    graph_name: "Violin Plot",
    graph_types: "Range",
  },
  {
    file: word_cloud,
    graph_name: "Word Cloud",
    graph_types: "Proportions",
  },
];

export default GraphFileList;
