import React from "react";
import { termsAndConditionsList } from "./listText";
import "./TermsAndConditions.css";

const TermsAndConditions = () => {
  return (
    <section className="terms-and-conditions-section">
      <div className="text-center pb-3">
        <br />
        <h1 className="terms">Term’s and Conditions</h1>
        <br />
      </div>
      <div className="light-blue-bg pt-3 pb-3">
        <div className="container">
          <ol>
            {termsAndConditionsList.map(list => (
              <>
                <h3 className="terms">
                  <li>{list.title}</li>
                </h3>
                {list.description.map(des => (
                  <>
                    <br />
                    <p className="terms">{des}</p>
                  </>
                ))}
              </>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
