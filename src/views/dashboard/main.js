/*
 * Copyright (C) Zoomdata, Inc. 2012-2020. All rights reserved.
 */

let entities = [];
let selectedEntity = null;
let tokenObject = null;
let embeddedComponents = [];
let config;

const widgetHolder = document.querySelector(".widget-holder");
const messageHolder = document.querySelector(".message-holder");
const isIdRoute = /(dashboards|visuals)/.test(window.location.pathname);
const isVBRoute = /(visual-builder|visuals)/.test(window.location.pathname);
const isLiteRoute = window.location.pathname === "/lite";

const entityType = isVBRoute ? "visual" : "dashboard";
const entityTypeIdKey = isVBRoute ? "visualId" : "dashboardId";
const entityTypeNameKey = isVBRoute ? "visualName" : "name";
const entityUrl = isVBRoute
  ? "/api/visuals/?tags=author%2Cdashboard&page=0&size=10000"
  : "/api/dashboards";
const componentType = isLiteRoute
  ? "lite-dashboard"
  : isVBRoute
  ? "visual-builder"
  : "dashboard";

const nonce = document.currentScript.nonce;

let getEmbedManagerPromise;

function getParentContainer() {
  let widgetWrapper;
  widgetWrapper = document.createElement("div");
  widgetWrapper.classList.add("widget-wrapper");
  widgetHolder.append(widgetWrapper);
  return widgetWrapper;
}

async function refreshComponent(componentInstanceId) {
  const embedManager = await getEmbedManagerPromise;
  embedManager.refreshComponent(componentInstanceId);
}

async function addComponent(id, params) {
  const widgetWrapper = getParentContainer();
  if (!widgetWrapper) {
    return;
  }
  const script = document.createElement("script");
  script.src = `${process.env.REACT_APP_COMPOSER_URL}/embed/embed.js`;
  script.dataset.name = "composer-embed";
  script.innerHTML = JSON.stringify({
    type: componentType,
    [entityTypeIdKey]: id,
    ...params,
  });
  widgetWrapper.append(script);
}

async function getToken() {
  // const response = await fetch('http://localhost:3001/token', {
  //     method: 'POST',
  //     headers: {
  //         Authorization: `Basic ${btoa(`admin:Z00mda1a!`)}`
  //       },
  //     credentials: 'same-origin'
  // });
  // return response.json();
}

window.composerGetToken = async function () {
  // transform for the embed syntax
  return getToken().then((result) => {
    return {
      access_token: result.token,
      expires_in: result.expiresIn,
    };
  });
};

async function getEntities(token) {
  const contentHeaders = {
    Accept: "application/vnd.composer.v3+json",
    "Content-Type": "application/vnd.composer.v3+json",
  };

  const response = await fetch(config.composerUrl + entityUrl, {
    headers: {
      ...contentHeaders,
      Authorization: "Bearer " + token,
    },
  });

  const res = await response.json();

  return res.content;
}

async function getConfig() {
  const response = await fetch("http://localhost:3001/config");
  return response.json();
}

function initEmbed() {
  getEmbedManagerPromise = window.initComposerEmbedManager(
    {
      getToken: function () {
        // transform for the embed syntax
        return getToken().then((result) => {
          return {
            access_token: result.token,
            expires_in: result.expiresIn,
          };
        });
      },
    },
    undefined,
    { nonce }
  );
}

(async function startApp() {
  const tokenResponse = await getToken();
  tokenObject = {
    access_token: tokenResponse.token,
    expires_in: tokenResponse.expiresIn,
  };

  config = await getConfig();
  entities = await getEntities(tokenObject.access_token);
  initEmbed();
  addComponent("65f81aead4b65d67150845d0", {});
})();
