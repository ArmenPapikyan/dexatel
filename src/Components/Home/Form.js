import React, {useState} from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function Form() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className="form-section">
            <div className="container container-largest form-block">
                <h2 className="section-title text-center">Schedule an appointment</h2>
                <div className="row">
                    <div className="col-md-12">
                        <form action="">
                            <div className="form-row">
                                <div className="form-group col-md-6 inputs">
                                    <div>
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email"/>
                                    </div>
                                    <div>
                                        <select name="" id="">
                                            <option value="">Purpose of appointment</option>
                                            <option value="">Purpose of appointment</option>
                                            <option value="">Purpose of appointment</option>
                                        </select>
                                    </div>
                                    <div>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={date => setStartDate(date)}
                                            showTimeSelect
                                            dateFormat="MMMM d, yyyy h:mm aa"
                                            className="inputDateTimePicker"
                                            style={{marginBottom: 0}}
                                        />
                                    </div>
                                </div>
                                <div className="form-group col-md-6 textarea">
                                    <div>
                                        <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                        <div className="d-flex input-file">
                                            <label htmlFor="file">Upload</label>
                                            <input type="file" id="file" className="file"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right row">
                                <div className="col-md-12">
                                    <button className="btn btn-primary largest">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;
