import React from "react";
import "./Thermoton.css";
import { ReactComponent as TemperatureIcon } from "../../icons/Temperature.svg";
import { ReactComponent as HumidityIcon } from "../../icons/humidity.svg";
import { ReactComponent as BatteryIcon } from "../../icons/battery.svg";
import { ReactComponent as BluetoothIcon } from "../../icons/bluetooth.svg";
import { ReactComponent as AutomatedIcon } from "../../icons/automated.svg";
import { ReactComponent as WaterproofIcon } from "../../icons/Waterproof.svg";
import { ReactComponent as HistoryIcon } from "../../icons/history.svg";
import { ReactComponent as AssignIcon } from "../../icons/assign.svg";
import { ReactComponent as ReloadIcon } from "../../icons/reload.svg";
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

  const trainings = [
    {
      name: "Training history",
      description: "Managers can access of the team trainings.",
      icon: <HistoryIcon />,
    },
    {
      name: "Assign training to employees",
      description:
        "Our platform have already been populated with a variety of trainings that can be used and assigned" +
          " to any staff for free. They can also upload their trainings in any format.",
      icon: <AssignIcon />,
    },
  ];

  return (
    <section className="Thermoton-section">
      <div className="main-thermoton">
        <div className="thermoton-content">
          <h3>
            All it takes to run a successful <br /> catering business without
            any hassle.
          </h3>

          <div>
            <h2>Thermoton</h2>
            <p>Free yourself from paperwork</p>
          </div>
        </div>
      </div>

      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div>
                <img src="./imgs/dashboard.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="offset-md-2 col-md-8">
              <div className="text-center">
                <h2>CMS features</h2>
                <p>
                  All of the captured Records are stored in the cloud and can be accessed at anytime,<br/>
                  in any form, starting from Reports to visual presentation
                </p>
                <br />
                <h3 className="text-center">3 different accounts available.</h3>
              </div>
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
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6 col-12">
              <div>
                <img src="./imgs/sofa.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="sofa-txt-container">
                <h3>Food And Safety Control System</h3>
                <h4>Temperature Records</h4>
                <p>
                 Through our cutting edge smart device Thermoton we provide temperature
                  reading monitoring solutions. By automating manual temperature checks,
                  we offer conveniency and accessibility. This device automatically measures
                  the environment temperature and it uploads the data to the cloud making the
                  information easy to access from anywhere at any time. Our smart device has been
                  designed to offer a variety of solutions and adapt to different environments,
                  ranging from large-scale industrial use to commercial standalone use. Therefore,
                  Thermoton can adjust and monitor any environment that requires precise
                  temperature monitoring, from fridges, freezers etc.
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />

          <div className="row">
            <div className="offset-md-1 col-md-10 col-12">
              <p className="text-center">
                The Thermoton device is linked to a CMS that can be accessed
                from any device, from iOS to Android, which is shown via an
                application data visualisation for simpler understanding and data
                interpretation. The collected records are saved in the cloud and may be
                viewed from anywhere at any time. When the gadget captures data that exceeds
                the pre-set temperature limit, the user will be notified through email,
                SMS, or phone notification.
              </p>
            </div>
          </div>
          <br />
        </div>
      </div>

      <div className="container">
        <div className="waves">
          <div className="row">
            <div className="offset-md-1 col-md-4">
              <div className="fc-center text-gap ">
                <h3>HAACP/DFFS/FSA Report</h3>
                <p>
                  Our Company has worked closely with the FSA (Food Standard Agency),
                  therefore, we are aware, and up to date with all the requirements.
                  Through our CMS our clients can generate detailed reports that have
                  been customised and adapted to meet all the FSA conditions. Our
                  device offers detailed control of the HAACP digital reports which
                  are securely stored in the cloud and ready for any FSA inspection.
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="f-end">
                <img src="./imgs/report.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="f-center flex-column">
              <h3>Customised Task management</h3>
              <div className="separator"></div>
            </div>
          </div>
          <br />
          <br />
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src="./imgs/management.png" alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="fc-center text-gap">
                {/*<h3>HAACP/DFFS/FSA Report</h3>*/}
                <p>
                  This feature offers management the option to create, print,
                  edit and delete customised To-do lists or tasks that may need
                  to be completed periodically. Moreover, one of the benefits of
                  this feature is the possibility to assign employees tasks very
                  easily through our CMS. Our system also allows customised report
                  generation including HACCP, DFSS, FSA and more.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="f-center flex-column">
              <h3>Incident management</h3>
              <div className="separator"></div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="offset-md-1 col-md-4">
              <div className="fc-center text-gap ">
                <h3>Incident management</h3>
                <p>
                  Our CMS has a designated area only to keep track of
                  all the incidents happening at work. The form can
                  be fully customised, is easy to use, and all the stored
                  records can be accessed at any time. Moreover, we
                  provide many ready to implement templates from managers.
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="f-end">
                <img src="./imgs/incident.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <div className="text-center p-5">
              <h3>Employee Management</h3>
              <p>
                Through our user friendly graphics our CMS offers management the opportunity
                to address the staff or employees easier than it has ever been. This is thanks to our
                user-friendly easy to use graphics. This presents the following features:
              </p>
            </div>
          </div>
        </div>

        {/*STARTS HERE SECOND SECTION*/}
        <div className="waves2">
          <div className="wave-part">
            <div className="row">
              <div className="offset-md-1 col-md-5">
                <div className="fc-center text-gap">
                  <h3>Staff Shift/Rota management</h3>
                  <p>
                    This feature allows management to control and handle the
                    rota and employee working hours. When a shift is assigned
                    to an employee, this will send an automatic notification
                    that there has been a shift on their schedule. Our CMS also allows
                    staff members to send notifications or messages in case of a late
                    show-up. Moreover, this feature allows communication from employees
                    to management, directly on the app, in case of needing to
                    communicate any issues or queries. The app calendar
                    can de be exported or connected to external calendars such
                    as IOS Calendar, Outlook or Google.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="f-end">
                  <img
                    src="./imgs/time_management.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="wave-part">
            <div className="row">
              <div className="col-md-6">
                <div className="fc-center ">
                  <img
                    src="./imgs/staff_training.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="offset-md-1 col-md-4">
                <div>
                  <div className="d-flex flex-column text-gap">
                    <h3>Staff Training environment</h3>
                    <p>
                      In this Section Managers will be able to assign trainings
                      to be completed within our integrated platform.
                    </p>
                  </div>

                  <div className="d-flex flex-column text-gap">
                    <div className="fg-between align-items-center">
                      <ReloadIcon />
                      <h4>Training history</h4>
                    </div>
                    <p>Managers can access the team training.</p>
                  </div>

                  <div className="d-flex flex-column text-gap">
                    <div className="fg-between">
                      <AssignIcon />
                      <h4>Assign training to employees</h4>
                    </div>
                    <p>
                      Our platform has already been populated with a variety of
                      training that Can be used and assigned to any staff for
                      free. They can also upload their training in any format.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wave-part">
            <div className="row">
              <div className="offset-md-1 col-md-4">
                <div className="fc-center text-gap">
                  <h3>Chat feature</h3>
                  <p>
                    This feature offers the businesses to have private
                    one to one chats, team or full stall chat
                    environments within our platform.
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="f-end">
                  <img src="./imgs/chat.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>

          <div className="wave-part">
            <div className="row">
              <div className="col-md-6">
                <div className="fc-center">
                  <img
                    src="./imgs/clock_in_out.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="fc-center text-gap">
                  <h3>Staff Clock in/ Clock out system</h3>
                  <p>
                    This feature allows employees to start and finish their
                    shifts and breaks using their own iOS or Android
                    device or using another central device that will be
                    located on the site.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="wave-part">
            <div className="row">
              <div className="offset-md-1 col-md-4">
                <div className="fc-center text-gap">
                  <h3>Cloud Storage</h3>
                  <div className="separator"></div>
                  <p>
                   This feature offers management the option
                    to store documents physically or digitally,
                    such as a Pest control certificate.
                  </p>
                </div>
              </div>
              <div className="col-md-7">
                <div className="f-end">
                  <img src="./imgs/cloud.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          <h3>
            Themoton- All it takes to run a successful catering business without
            any hassle, and free yourself from paperwork
          </h3>
          <br />
        </div> */}
      </div>

      <div className="light-blue-bg pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-5">
                <h3>Thermoton Features</h3>
              </div>
            </div>
          </div>
          <ol className="services-list">
            <div className="row">
              {services.map((service, idx) => (
                <CircledIcon
                  {...service}
                  idx={idx}
                  key={idx}
                  bgColor="bg-white"
                />
              ))}
              <div className="col-md-5"></div>
            </div>
          </ol>{" "}
        </div>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="offset-lg-2 col-lg-8 col-12">
          <div className="specification">
            <h4>Specification</h4>
            <br />
            <table className="table">
              <thead>
                <tr className="table-header">
                  <th colSpan="2">Basic Information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Length</td>
                  <td>4.96'' (89mm)</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>3.38'' (86mm)</td>
                </tr>
                <tr>
                  <td>Width</td>
                  <td>0.88'' (32.5mm)</td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>143g ± 3g (without batteries)</td>
                </tr>
                <tr>
                  <td>Sensing Range</td>
                  <td>
                    Temperature -4℉ to 140℉(-20℃ to 60℃), Humidity 10% to 90%⚠
                  </td>
                </tr>
                <tr>
                  <td>Accuracy</td>
                  <td>
                    Temperature: ±0.1℃, Humidity: ±2% RH, Ambient Light: ±2%①
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="table">
              <thead>
                <tr className="table-header">
                  <th colSpan="2">Power Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Battery Life</td>
                  <td>8-12 months (WiFi only); 1-2 months (WiFi and SIM)②</td>
                </tr>
              </tbody>
            </table>

            <table className="table">
              <thead>
                <tr className="table-header">
                  <th scope="col" colSpan="2">Network & Wireless Connectivity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Network</td>
                  <td>Supports WiFi, GPRS / 3G / 4G*</td>
                </tr>
                <tr>
                  <td>WiFi Channel Width</td>
                  <td>Supports 20MHz or "Auto" setting</td>
                </tr>
                <tr>
                  <td>WiFi Security</td>
                  <td>
                    Supports OPEN, WEP, or WPA/WPA2 types, WPA2-Enterprise
                    (802.1x/RADIUS authentication) network is not supported.
                  </td>
                </tr>
                <tr>
                  <td>Wi-Fi</td>
                  <td>
                    Requires 2.4GHz (802.11 b/g/n), channels 1-13 network (5GHz
                    WiFi is NOT supported)
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="table">
              <thead>
                <tr className="table-header">
                  <th colSpan="2">Other Specification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Compatibility</td>
                  <td>iOS 11+, Android 8.1+, or Windows 7+, or macOS v10.8+</td>
                </tr>
                <tr>
                  <td>External Probe</td>
                  <td>
                    2 Micro USB, supports DS18B20 temperature probe (optional
                    extra)
                  </td>
                </tr>
                <tr>
                  <td>On-board Memory</td>
                  <td>300,000 sensing records</td>
                </tr>
                <tr>
                  <td>Wi-Fi</td>
                  <td>
                    Requires 2.4GHz (802.11 b/g/n), channels 1-13 network (5GHz
                    WiFi is NOT supported)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thermoton;
