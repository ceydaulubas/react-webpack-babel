import React, { Component } from 'react'

import InsurancesList from './insurances.json';
import InsuranceBox from './components/InsuranceBox';
import InsuranceForm from './components/InsuranceForm';
import InsuranceSearch from './components/InsuranceSearch';
import NavBar from './components/NavBar'

class app extends Component {
  state = {
    insuranceState: InsurancesList,
    filteredInsuranceListState: [],
    form: false,
  };

  // handleRenderForm() - it changes the value of "form" in our state. Helps with rendering the insurance form.
  handleRenderForm = () => {
    const stateCopy = { ...this.state };
    stateCopy.form = !this.state.form;
    this.setState(stateCopy);
  };

  // handleAddNewInsurance() - The function that will help InsuranceForm.js to lift state.
  handleAddNewInsurance = (newInsuranceItem) => {
    const stateCopy = { ...this.state };
    stateCopy.insuranceState = [...stateCopy.insuranceState, newInsuranceItem];
    stateCopy.form = !stateCopy.form;
    this.setState(stateCopy);
  };

  // filter insurances according to the incoming search value
  handleFilterInsurances = (searchInput) => {
    const stateCopy = { ...this.state };

    const filteredInsurancesList = stateCopy.insuranceState.filter((insuranceItem) =>
      insuranceItem.customerName.toLowerCase().includes(searchInput.toLowerCase())
    );

    stateCopy.filteredInsuranceListState = filteredInsurancesList;
    stateCopy.searching = true;

    this.setState(stateCopy);
  };


  // // Add new insurance to list
  handleAddInsuranceToList = (InsuranceObject) => {
    const stateCopy = { ...this.state };
    stateCopy.todaysInsuranceList.push(InsuranceObject);

    this.setState(stateCopy);
  };


  render() {
    return (
      <div className="App">

        <NavBar />

        {/* Search Bar */}
        <InsuranceSearch handleFilterSearch={this.handleFilterInsurances} />

        {/* <button>Show Unpaid Insurances </button> */}

        {/* Button to toggle addInsurance form */}
        <button className="addInsuranceButton" onClick={this.handleRenderForm}>
          Add Insurance
        </button>

        {/* Toggle the form when this.state.form has the value of "true"*/}
        {this.state.form && (
          <InsuranceForm handleLiftInsuranceFormState={this.handleAddNewInsurance} />
        )}

        <div style={{ width: '70%', marginRight: "auto", marginLeft: "auto" }}>
          {/* Mapping through the state of insurances and passing them to the InsuranceBox component */}
          {this.state.searching
            ? this.state.filteredInsuranceListState.map((InsuranceItem, index) => (
              <InsuranceBox
                key={index}
                {...InsuranceItem}
                handleAddInsurance={this.handleAddInsuranceToList}
              />
            ))
            : this.state.insuranceState.map((InsuranceItem, index) => (
              <InsuranceBox
                key={index}
                {...InsuranceItem}
                handleAddInsurance={this.handleAddInsuranceToList}
                handleAddPaidSituation={this.handleChangePaidSituation}
              />
            ))}
        </div>
        <footer>
          This web page created by Ceyda Ulubas
        </footer>
      </div>
    )
  }
}

export default app;
