import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Accordion from "react-bootstrap/Accordion";
import elements from "../images/logo/element-icon1.svg";
import components from "../images/logo/comp-icon.svg";
import pages from "../images/logo/page.svg";

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allDirectory(skip: 4) {
        nodes {
          name
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);


  const elementsList = JSON.parse(JSON.stringify(data.allDirectory.nodes)); 
  
  const componentsExcludesList = ['-shimmer',"nents"];

  const componentsList = elementsList.filter((item) =>
    item.name.includes("rds-comp") && !componentsExcludesList.some((element) => item.name.includes(element)) 
  ); 
  

  componentsList.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  const elementExcludesList = ['-shimmer','element','-cookieconsent','components'];

  const rdsElementList = elementsList.filter(
    (item) =>
      item.name.includes("rds-") && !componentsList.find((x) => x === item) &&
       !elementExcludesList.some((element) => item.name.includes(element)) 
  );


  elementsList.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });


  // find out pages names.
  const excludes = [
    "rds-",
    "src",
    "lib",
    "app",
    "assets",
    "environments",
    "root",
    "e2e",
    "accordion-item",
    "scrollspy-item",
    "projects",
    "shared",
    "data",
    "styles",
    "state",
    "multiple-mfe",
    "projects",
    ".storybook",
    "modals",
    "sidenav",
    "selected-product",
    "ele-preview",
   "webhooks-subscription-shimmer",
   "cookieconsent",
   "utils",
   "util",
   "-shimmer",
   "rdc-comp-api-scope-basic",
   "rdc-comp-api-scope-resource",
   "test",
   "testing",
   "mla",
   "date-fns",
   "day",
   "model",
   "moment",
   "ng-add",
   "themes",
   "event",
   "home",
   "date-adapters",
   "date-adapter",
   "basicresource",
   "common",
   "host",
   "modules",
   "month",   
   "i18n", 
   "service",
   "DownloadData",
   "product-list",
   "products",
   "api-claims",
   "api-properties",
   "api-basics",
   "api-secrets",
   "authority-delegations",
   "claim-types",
   "claims",
   "edit-language-text",
   "language-storybook",
   "login-attempts",
   "manage-linked-accounts",
   "modal",
   "my-settings",
   "schematics",
   "visual-settings"
  ];
  const pageList = elementsList.filter(
    (item, index, self) =>
      !excludes.some((element) => item.name.includes(element)) &&
      index === self.findIndex((t) => t.name === item.name)
  );
  


  pageList.sort((a, b) => {
    let fa = a.name.toLowerCase(),
      fb = b.name.toLowerCase();
    if (fa < fb) {
      return -1;
    }
    if (fa > fb) {
      return 1;
    }
    return 0;
  });

  return (
    <div className="h-100 cust-scroll">
      <div className="menu-list p-0 mt-4">
        <Accordion defaultActiveKey="0" className="accordion accordion-flush px-2">
          <Accordion.Item eventKey="0" className="accordion-item">
            <Accordion.Header className="accordion-header">
              <div className="suheading pb-2 align-middle">
                <img
                  src={elements}
                  className="img-fluid"
                  width="20px"
                  alt="elements"
                />
                <span className="px-3"> Elements </span>
                {/* <h5>{data.allDirectory.nodes.name}</h5> */}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className="mb-4">
                <ul className="">
                  {elementTO.map((node) => (
                    <li key={node.name}>
                      <Link href={node.name.substring(4)} >
                        {node.name.substring(4)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="suheading pb-2">
                <img
                  src={components}
                  className="img-fluid"
                  width="20px"
                  alt="components"
                />
                <span className="px-3"> Components </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="">
                {componentName.map((node) => (
                  <li key={node.name}>
                    <Link href={node.name.substring(9)}>
                      {node.name.substring(9)}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="suheading pb-2">
                <img
                  src={pages}
                  className="img-fluid"
                  width="20px"
                  alt="pages"
                />
                <span className="px-3"> Pages </span>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className="">
                {pageName.map((node) => (
                  <li key={node.name}>
                    <Link href={node.name}>{node.name}</Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
