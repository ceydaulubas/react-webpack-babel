import React from 'react'

const showUnpaidInsurances = () => {

    const [showPaidInsurance, setShowPaidInsurance] = useState(false);


    // function to help toggle movies based on the state of showOscars
  const toggleMovies = () => setShowPaidInsurance(!showPaidInsurance);

    return (
        <div>
          <button onClick ={ () => handleChangePaidSituation()}>
                        {this.state.hasPaid
                        ? "Hide unpaid insurances"
                        : "Show only paid insurances"}
                    </button>
        </div>
    )
}


export default showUnpaidInsurances;