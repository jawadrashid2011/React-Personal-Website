import React from "react";
import { Link, Switch, Route } from "react-router-dom";

const NetworkDashboard = () => {
  return (
    <div>
      <h1>Network Dashboard Project</h1>

      <div>
        <h2>Desription</h2>
        <p>
          Network Dashboard is a project for managing network devices,
          topologies, tests and running test cases. The network
          dashboards(inventory, topology and test) are all persisted in a
          database. If a device is deleted in inventory it is synchronized in
          topologies and tests as well.
        </p>
        <p>
          In Inventory Management you can manage physical network devices i.e
          switches, routers, firewall and servers etc. The device icons
          represent device states i.e on, off etc. Devices can connect with each
          other on available ports. Panning and zooming are some of the features
          of play area to focus on devices.
        </p>
        <p>
          In topology management you can manage topologies by selecting devices
          and their links added in inventory management. In test management you
          can manage tests for a topology.
        </p>
        <p>
          You can view demo video at{" "}
          <a
            href="https://youtu.be/kQysWjnXVc8"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://youtu.be/kQysWjnXVc8
          </a>
        </p>
      </div>

      <div>
        <h2>Tools Used</h2>
        <ul>
          <li>
            <strong>Front End Technologies: </strong>D3.js, Bootstrap,
            JavaScript, jQuery, jQueryUI, SVG, JSON
          </li>
          <li>
            <strong>Server Side Technologies: </strong>PHP, Bonfire,
            CodeIgniter, AWS EC2, Linux
          </li>
          <li>
            <strong>Back End Technologies: </strong>MySQL
          </li>
        </ul>
      </div>
      <div>
        <h2>Video Demo</h2>
        <iframe
          title="Netowrk Dashboard Video Demo"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/kQysWjnXVc8"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
      <div>
        <h2>Screenshots</h2>
        <div>
          <iframe
            title="Screenshots"
            src="https://albumizr.com/a/wm-o"
            scrolling="no"
            frameborder="0"
            allowfullscreen
            width="100%"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

const WorldCountryMap = () => {
  return (
    <div>
      <h1>World & Country Population Map</h1>

      <div>
        <h2>Desription</h2>
        <p>
          This World population dashboard allows to interactively explore global
          population data from years 1970-1995 for over 200 countries. This
          dashboard allows you to dig deeper into each country by visualizing
          population data for each city. This visualization uses census data
          collected by United Nations Statistics Division(UNSD). This dashboard
          integrates data from multiple sources to provide a unified picture of
          global and local population. This dashboard integrates country codes
          data along with location data for major cities of the world for each
          country with census data.
        </p>
        <p>
          This dashboard uses DataMaps for the mapping solution, MongoDB as a
          database, Java Spring as a backend and Javascript/jQuery/d3.js code
          for front end. You can view an exhaustive list of all plugins and
          technologies used in the technologies section below.
        </p>
        <p>
          You can view the interactive dashboard and interact with it here:{" "}
          <a
            href="http://bit.ly/2HSeHEj"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://bit.ly/2HSeHEj
          </a>
        </p>
        <p>
          You can find blog post detailing technical details about this
          dashboard here:{" "}
          <a
            href="http://www.jawadrashid.com/PopulationMap"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.jawadrashid.com/PopulationMap
          </a>
        </p>
        <p>
          Feel free to email me at{" "}
          <a
            href="mailto:jawad@ndataconsulting.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            jawad@ndataconsulting.com.
          </a>{" "}
          Plus more contact information is present in the interactive dashboard
          in info tab.{" "}
        </p>
      </div>

      <div>
        <h2>Tools Used</h2>
        <ul>
          <li>
            <strong>Frontend: </strong>DataMaps, jQuery, D3.js, Bootstrap,
            jQueryUI, FontAwesome, jQuery UI Slider Pips, EasyAutocomplete,
            DataTables, Social Share Kit, Loading Overlay, Lodash, D3 Legend
          </li>
          <li>
            <strong>Backend: </strong>Java Spring, MongoDB
          </li>
        </ul>
      </div>
      <div>
        <h2>Video Demo</h2>
        <iframe
          title="Netowrk Dashboard Video Demo"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/bb0nElQN3BY"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
      <div>
        <h2>Screenshots</h2>
        <div>
          <iframe
            title="Screenshots"
            src="https://albumizr.com/a/w2pX"
            scrolling="no"
            frameborder="0"
            allowfullscreen
            width="100%"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

const InvestmentDecision = () => {
  return (
    <div>
      <h1>Investment Decision System</h1>

      <div>
        <h2>Desription</h2>
        <p>
          An interesting visualization that guides investors make decision which
          startup firm and companies should they invest in to earn maximum
          profit. The key highlights are:
        </p>
        <ul>
          <li>
            Clustering of similar firms and interactions of firms with startups.
          </li>
          <li>
            Breakdown of similar firms and companies which have co-invested in
            same startups and status of each startup at the time of investment.
          </li>
          <li>Data mining in R to construct graphs for firms and startups. </li>
          <li>
            Heuristics were applied to cluster similar firms and companies.
          </li>
          <li>Data imported into MongoDB from R.</li>
          <li>Java spring was used to create RESTful web-service.</li>
          <li>d3.js for data visualization along with jQuery.</li>
        </ul>
        <p>
          The visualization can be found at{" "}
          <a
            href="http://goo.gl/aVhPqV"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://goo.gl/aVhPqV
          </a>
        </p>

        <p>
          Video demos for the visualization can be found{" "}
          <a
            href="https://youtu.be/P4iP5HgwLvQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          along with time series demo{" "}
          <a
            href="https://youtu.be/iDpkD5_asGo"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </div>

      <div>
        <h2>Video Demo</h2>
        <iframe
          title="Netowrk Dashboard Video Demo"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/P4iP5HgwLvQ"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
        <iframe
          title="Netowrk Dashboard Video Demo"
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/iDpkD5_asGo"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
      <div>
        <h2>Screenshots</h2>
        <div>
          <iframe
            title="Screenshots"
            src="https://albumizr.com/a/hzKi"
            scrolling="no"
            frameborder="0"
            allowfullscreen
            width="100%"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

const Projects = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/network_dashboard"}>
            Network Dashboard Project
          </Link>
        </li>
        <li>
          <Link to={match.url + "/world_country_map"}>
            World & Country Population Map
          </Link>
        </li>
        <li>
          <Link to={match.url + "/investment_decision"}>
            Investment Decision System
          </Link>
        </li>
      </ul>
      <Switch>
        <Route
          path={match.url + "/network_dashboard"}
          component={NetworkDashboard}
        />
        <Route
          path={match.url + "/world_country_map"}
          component={WorldCountryMap}
        />
        <Route
          path={match.url + "/investment_decision"}
          component={InvestmentDecision}
        />

        <Route
          exact
          path={match.url}
          render={() => <div>Pick a project to view!</div>}
        />
      </Switch>
    </div>
  );
};

export default Projects;
