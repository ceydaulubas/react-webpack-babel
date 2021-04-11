import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// import Pdf from "react-to-pdf";
// const ref = React.createRef();
class InsuranceBox extends Component {

    state = {
        hasPaid: false
    };

    handleChangePaidSituation = () => {
        const stateCopy = { ...this.state };
        stateCopy.hasPaid = !this.state.form;
        this.setState(stateCopy);
    }

    render() {
        return (
            <div className="box" 
            // size="A4" 
            // ref={ref} 
            >
                <div className="invoiceDetailForm">
                    <table>
                        <tbody>
                            <tr>
                                <td><strong>Invoice Number</strong></td>
                                <td>{this.props.randomInvoicenum}</td>
                            </tr>
                            <tr>
                                <td><strong>Invoice Date</strong></td>
                                <td>{this.props.invoiceDate}</td>
                            </tr>
                            <tr>
                                <td><strong>Supply Date</strong></td>
                                <td>{this.props.supplyDate}</td>
                            </tr>
                            <tr>
                                <td><strong>Puchase Order Number</strong></td>
                                <td>{this.props.purchaseOrderNumber} </td>
                            </tr>
                            <tr>
                                <td><strong>Payment Term</strong></td>
                                <td>{this.props.paymentTerm}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <hr />
                <div className="mainFirm">
                    <img src={this.props.logo} alt="logo" className="firmlogo" />
                    <ul>
                        <li>
                            <strong>Company Name:</strong> {this.props.companyName}
                        </li>
                        <li>
                            <strong> Company Adress:</strong> {this.props.companyAdress}
                        </li>
                        <li>
                            <strong> Company Web Page: </strong>{this.props.companyWebPage}
                        </li>
                        <li>
                            <strong> Company Phone Number:</strong>  {this.props.companyPhonoNum}
                        </li>
                    </ul>
                </div>

                <hr />
                <div className="customerFirm">
                    <img src={this.props.customerLogo} alt="customerlogo" className="customerlogo" style={{ width: '70px' }} />
                    <ul>
                        <li>
                            <strong>Customer Firm: </strong>{this.props.customerName}
                        </li>
                        <li>
                            <strong>Customer Adress: </strong>{this.props.customerAdress}
                        </li>
                        <li>
                            <strong>Customer Web Page: </strong>{this.props.customerWebPage}
                        </li>
                        <li>
                            <strong>Customer Phone Number: </strong>{this.props.customerPhoneNum}
                        </li>
                    </ul>
                </div>

                <div className="container">
                    <div className="table">
                        <div className="table-header">
                            <div className="header__item"><h6 className="filter__link">Expenses</h6></div>
                            <div className="header__item"><h6 className="filter__link ">Amount</h6></div>
                        </div>


                        <div className="table-content">
                            <div className="table-row">
                                <div className="table-data">Labour</div>
                                <div className="table-data">{(this.props.labourExpenses).toLocaleString()}$</div>
                            </div>
                            <div className="table-row">
                                <div className="table-data">Material</div>
                                <div className="table-data">{(this.props.materialExpenses).toLocaleString()}$</div>
                            </div>
                            <div className="table-row">
                                <div className="table-data">Outsourcing</div>
                                <div className="table-data">{(this.props.outsourcing).toLocaleString()}$</div>
                            </div>
                            <div className="table-row">
                                <div className="table-data">Other Expenses</div>
                                <div className="table-data">{(this.props.otherExpenses).toLocaleString()}$</div>
                            </div>
                            <div className="table-row">
                                <div className="table-data"><b>Total Expenses</b></div>
                                <div className="table-data"><b>{(this.props.labourExpenses + this.props.materialExpenses + this.props.outsourcing + this.props.otherExpenses).toLocaleString()}$</b></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="paymentSituation">
                    <h5 className="paymentSituationHead">Payment Situation</h5>
                    <button onClick={this.handleChangePaidSituation} className="paidButton">Paid</button>
                    {this.state.hasPaid && <p style={{ marginLeft: "3%" }}>INVOICE IS PAID</p>}
                </div>
                {/* <Pdf targetRef={ref} filename="post.pdf">
                    {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
                </Pdf> */}
            </div>
        );
    }
}

export default InsuranceBox;
