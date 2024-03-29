/*!

=========================================================
* argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Sources from "views/sources/sources";
import VisualAccordion from "views/visuals/visuals_accordion";
import DashboardVisual from "views/dashboard/dashboard_visual";
import Icons from "views/examples/Icons.js";

var routes = [

  {
    path: "/sources",
    name: "Data Sources",
    icon: "ni ni-bullet-list-67 text-red",
    component: <Sources />,
    layout: "/admin",
  },
  {
    path: "/visual_accordion",
    name: "Visual Selection",
    icon: "ni ni-bullet-list-67 text-red",
    component: <VisualAccordion />,
    layout: "/admin",
  },
  ,
  {
    path: "/dashboard_visual",
    name: "Selected Visual",
    icon: "ni ni-bullet-list-67 text-red",
    component: <DashboardVisual />,
    layout: "/admin",
  },
];
export default routes;
