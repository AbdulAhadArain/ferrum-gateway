import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import "../../assets/scss/_cards.scss";
import "../../assets/scss/_dropdowns.scss";
export const NetworkSelector = ({
  currentNetwork,
  icon,
  showDropdown=true,
  onNetworkChanged,
  availableNetworks = [],
  suspendedNetworks = [],
}) => {
  return (
    <Card className="card-network card-sec">
      <div className="icon-network icon-lg mb-3">
        <img src={icon} alt="loading"></img>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <small>{currentNetwork}</small>
        {
          showDropdown &&
            <Dropdown>
              <Dropdown.Toggle variant="pri" id="dropdown-basic">
                <i className="mdi mdi-chevron-down"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                {availableNetworks?.map((network, index) => (
                  <Dropdown.Item href={`#/action-${index}`} key={"av" + index} 
                    disabled={network === currentNetwork}
                    onClick={()=>onNetworkChanged(network)}
                  >
                    {network}
                  </Dropdown.Item>
                ))}
                {suspendedNetworks?.map((network, index) => (
                  <Dropdown.Header key={"sus" + index}>
                    {network}
                  </Dropdown.Header>
                ))}
              
              </Dropdown.Menu>
            </Dropdown>
        }
      </div>
    </Card>
  );
};
