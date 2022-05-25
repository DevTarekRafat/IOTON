import React from "react";
import "./Thermoton.css";
import { ReactComponent as TemperatureIcon } from "../../icons/Temperature.svg";
import { ReactComponent as HumidityIcon } from "../../icons/humidity.svg";
import { ReactComponent as BatteryIcon } from "../../icons/battery.svg";
import { ReactComponent as BluetoothIcon } from "../../icons/bluetooth.svg";
import { ReactComponent as AutomatedIcon } from "../../icons/automated.svg";
import { ReactComponent as WaterproofIcon } from "../../icons/Waterproof.svg";
import CircledIcon from "../../components/CircledIcon/CircledIcon";

const Thermoton = () => {
  const services = [
    {
      name: "0.2 centigrade Temperature Accuracy",
      icon: <TemperatureIcon />,
    },
    {
      name: "2% Hummidity accuracy",
      icon: <HumidityIcon />,
    },
    {
      name: "1030 days of battery life",
      icon: <BatteryIcon />,
    },
    {
      name: "built in Wifi And Bluetooth",
      icon: <BluetoothIcon />,
    },
    {
      name: "Fully automated",
      icon: <AutomatedIcon />,
    },
    {
      name: "Waterproof",
      icon: <WaterproofIcon />,
    },
  ];

  return (
    <section className="Thermoton-section">
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <h2>
              Our powerful CMS (Control Management System) is a fully integrated
              system that is made of many features
            </h2>
            <br />
            <h3>There are 3 different accounts available.</h3>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <div className="f-around">
              <div className="fg-between">
                <div className="blue-dot"></div>
                <span>Employee Account</span>
              </div>

              <div className="fg-between">
                <div className="blue-dot"></div>
                <span>Manager Account</span>
              </div>

              <div className="fg-between">
                <div className="blue-dot"></div>
                <span>Admin Account</span>
              </div>
            </div>
            <br />
            <p>
              All of the captured Records are stored in the cloud and can be
              accessed at anytime, in any form, starting from Reports to visual
              presentation
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="f-center flex-column">
            <h2>All the CMS features</h2>
            <br />
            <h3>Food And Safety Control System</h3>
            <div className="separator"></div>
            <br />
          </div>
          <div className="col-md-6 col-12"></div>
          <div className="col-md-6 col-12">
            <h4>Temperature Records</h4>
            <br />
            We provide Temperature monitoring Solution. Meaning, the everyday
            manual temperature checks are no longer required. This is possible
            through our cuttingedge smart device “THERMOTON”, that automatically
            measures the temperature of the environment placed on, upload’s it
            to tho cloud, so u can access it from anywhere at anytime. Our Smart
            Device has been build for any use, starting from massive scale
            industrial use, to commercial standalone device. Features Overviev 2
            Our Monitoring environment can be cold rooms, Fridge, Frizzers or
            any environment that requires precise temperature monitoring.
          </div>
        </div>
        <br />
        <div className="row">
          <div className="text-center">
            <h3>Thermoton Features </h3>
            <br />
          </div>
        </div>
        <ol className="services-list">
          <div className="row">
            {services.map((service, idx) => (
              <CircledIcon {...service} idx={idx} key={idx} />
            ))}
            <div className="col-md-5"></div>
          </div>
        </ol>
      </div>
    </section>
  );
};

export default Thermoton;
