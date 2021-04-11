import React, { useState } from 'react';

const initialState = {
  companyName: 'Google',
  companyAdress: 'Mountain View, California, United States',
  companyWebPage:"https://www.google.com/",
  companyPhonoNum: 6502530000,
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
  randomInvoicenum: Math.floor((Math.random() * 1000)),
  customerName: "",
  customerAdress:"",
  customerWebPage:"",
  customerPhoneNum:"",
  customerLogo:"",
  invoiceDate:"",
  supplyDate:"",
  purchaseOrderNumber:"",
  labourExpenses:"",
  materialExpenses:"",
  outsourcing:"",
  otherExpenses:"",
  paymentTerm:"",
};

const InsuranceForm = (props) => {
  const [formState, setFormState] = useState(initialState);

  // handleInputChange - will the data from the form to the component's state
  const handleInputChange = (event) => {
    // inputValue - the data coming in from the input fields
    let inputValue = event.target.value;
    let inputName = event.target.name;
    let inputType = event.target.type;

    if (inputType === 'number') {
      inputValue = parseInt(inputValue);
    }

    setFormState({ ...formState, [inputName]: inputValue });
  };

  // handleFormSubmit - send the data from the component's state to the state in App.js
  const handleFormSubmit = (event) => {
    event.preventDefault();

    props.handleLiftInsuranceFormState(formState);
    setFormState(initialState);
  };


  return (
    <div className="form">

      <form onSubmit={handleFormSubmit} className="insuranceForm">

        <label htmlFor="customerName">Customer Name: </label>
        <input
          className="input"
          type="text"
          name="customerName"
          onChange={handleInputChange}
          value={formState.customerName}
          required
        />

        <br />
        <label htmlFor="customerAdress">Customer Adress: </label>
        <input
          className="input"
          type="text"
          name="customerAdress"
          onChange={handleInputChange}
          value={formState.customerAdress}
          required
        />

        <br />
        <label htmlFor="customerWebPage">Customer WebPage: </label>
        <input
          className="input"
          type="text"
          name="customerWebPage"
          onChange={handleInputChange}
          value={formState.customerWebPage}
          required
        />

        <br />
        <label htmlFor="customerPhoneNum">Customer Phone Number: </label>
        <input
          className="input"
          type="number"
          name="customerPhoneNum"
          onChange={handleInputChange}
          value={formState.customerPhoneNum}
          required
        />

        <br />
        <label htmlFor="customerLogo">Customer Logo: </label>
        <input
          className="input"
          type="text"
          name="customerLogo"
          onChange={handleInputChange}
          value={formState.customerLogo}
          required
        />

        <br />
        <label htmlFor="invoiceDate">Invoice Date: </label>
        <input
          className="input"
          type="date"
          name="invoiceDate"
          onChange={handleInputChange}
          value={formState.invoiceDate}
          required
        />

        <br />
        <label htmlFor="supplyDate">Supply Date: </label>
        <input
          className="input"
          type="date"
          name="supplyDate"
          onChange={handleInputChange}
          value={formState.supplyDate}
          required
        />

        <br />
        <label htmlFor="purchaseOrderNumber">Purchase Order Number: </label>
        <input
          className="input"
          type="number"
          name="purchaseOrderNumber"
          onChange={handleInputChange}
          value={formState.purchaseOrderNumber}
          required
        />

        <br />
        <label htmlFor="labourExpenses">Labour Expenses: </label>
        <input
          className="input"
          type="number"
          name="labourExpenses"
          onChange={handleInputChange}
          value={formState.labourExpenses}
          required
        />

        <br />
        <label htmlFor="materialExpenses">Material Expenses: </label>
        <input
          className="input"
          type="number"
          name="materialExpenses"
          onChange={handleInputChange}
          value={formState.materialExpenses}
          required

        />

        <br />
        <label htmlFor="outsourcing">Outsourcing Expenses: </label>
        <input
          className="input"
          type="number"
          name="outsourcing"
          onChange={handleInputChange}
          value={formState.outsourcing}
          required
        />

        <br />
        <label htmlFor="otherExpenses">Other Expenses: </label>
        <input
          className="input"
          type="number"
          name="otherExpenses"
          onChange={handleInputChange}
          value={formState.otherExpenses}
          required
        />

        <br />
        <label htmlFor="paymentTerm">Payment Term: </label>
        <select
          className="input"
          type="text"
          name="paymentTerm"
          onChange={handleInputChange}
          value={formState.paymentTerm}
          required
          >
          <option value="CWO- Cash with order">CWO- Cash with order</option>
          <option value="EOM- End of month">EOM- End of month</option>
          <option value="Payment 7 days after invoice date">Net 7- Payment seven days after invoice date</option>
          <option value="Payment 60 days after invoice date">Net 60- Payment 60 days after invoice date</option>
          
        </select>

        <br />
        <button className="insuraceFormButton">Submit</button>
      </form>
    </div>
  );
};

export default InsuranceForm;
