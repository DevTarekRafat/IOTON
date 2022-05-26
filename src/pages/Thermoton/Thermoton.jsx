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
        "Our platform have already been populated with a variety of trainings that can be used and assigned to any staff for free. They can also upload their trainings in any format.",
      icon: <AssignIcon />,
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
        <p>
          All of the captured Records are stored in the cloud and can be
          accessed at anytime, in any form, starting from Reports to visual
          presentation. In case any of the monitoring environment reaches
          pre-set temperature limit, user can get notification via email, sms,
          or phone app Notification The CMS can be accessed in any platform,
          from IOS and Android application Data visualisation for easies
          understanding
        </p>
        <div className="waves">
          <div className="row">
            <div className="col-md-6">
              <div className="fc-center">
                <h3>HAACP/DFFS/FSA Report</h3>
                <p>
                  This feature offers the Mangers to create, print, edit and
                  delete customised To-do lists or tasks that may need to be
                  completed periodically. One of the amazing benefits of this
                  feature is that managers can assign employees to tasks.
                  Customised report generation including HACCP, DFSS, FSA, and
                  more
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src="./imgs/report.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
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
            <div className="col-md-6">
              <div className="fc-center">
                <h3>HAACP/DFFS/FSA Report</h3>
                <p>
                  Our Company have works close with the FSA (Food Standard
                  Agency). We know in details what they request. threw our CMS u
                  can generate detailed reports that have been customised and
                  adapted to meet al the FSA requirements. Since all of our data
                  are securely stored in the cloud, at no time u can have a
                  detailed HAACP digital report (can be printed or sent by
                  email) ready to show to the FSA inspector.
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
          <br />
          <div className="row">
            <div className="col-md-6">
              <div className="fc-center">
                <h3>Incident management</h3>
                <p>
                  Our CMS have a designated area only to keep truck of all the
                  incidents happening at work. The Form can be fully customised,
                  is easy to use and work on, and all the stored records can be
                  accessed at anytime. We provide many ready to implement
                  templates from managers.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src="./imgs/incident.png" alt="" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="offset-md-2 col-md-8">
            <div className="text-center">
              <h3>Employee Management</h3>
              <p>
                This feature offers to the managers the opportunity to manage
                the staff or employees easier than it has ever been. this
                because of the user friendly easy to use graphics. this feature
                includes:
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col-md-6">
            <h3>Staff Shift/Rota management</h3>
            <br />
            <p>
              At this area, managers can manage the rota or the employees
              working hours. When a shift is assigned to an employee, that
              employee with automatically get notification that a rota have been
              assigned to him. Any account can send late show-up messages to
              managers. Any account can query to the manager in case of a shift
              assignment problem. The App calendar can de exported or connected
              to external calendars such as Ios Calendar, Outlook, Google.
            </p>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>

          <div className="col-md-6">
            <div>
              <h3>Staff Training environment</h3>
              <br />
              <p>
                In this Section Managers will be able to assign trainings to be
                completed within our integrated platform.
              </p>
              <ol className="services-list">
                <div className="row">
                  {trainings.map((service, idx) => (
                    <CircledIcon
                      {...service}
                      idx={idx}
                      key={idx}
                      col="col-12"
                    />
                  ))}
                </div>
              </ol>
            </div>
          </div>
          <div className="col-md-6">
            <div className="fc-center">
              <h3>Chat feature</h3>
              <p>
                This feature offers the businesses to have private one to one
                chats, team or full stall chat environments within our platform
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="fc-center">
              <img src="./imgs/chat.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div>
              <h3>Staff Clock in/ Clock out system</h3>
              <p>
                Clock in /clock out - employees are able to start and end their
                shifts and breaks using their own iOS or Android device or using
                another central device that’s on the site.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="fc-center">
              <img src="./imgs/cloud.png" alt="" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="fc-center">
              <h3>Cloud Storage</h3>
              <div className="separator"></div>
              <br />
              <p>
                This feature offers managers to store their important documents
                in physical and digital form such as Pest control certificate,
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="text-center">
          <h3>
            Themoton- All it takes to run a successful catering business without
            any hassle, and free yourself from paperwork
          </h3>
          <br />
        </div>

        <div className="specification">
          <h4>Specification</h4>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Basic Information</th>
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

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Power Source</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Battery Life</td>
                <td>8-12 months (WiFi only); 1-2 months (WiFi and SIM)②</td>
              </tr>
            </tbody>
          </table>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Network & Wireless Connectivity</th>
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

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Other Specification</th>
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
    </section>
  );
};

export default Thermoton;
