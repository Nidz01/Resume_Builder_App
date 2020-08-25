import React, { useContext } from 'react';
import "./forms.css"
export default function Summary(props) {
  return (
    <form
    className="flex signup-form"
    style={{ paddingLeft: "0px" }}
  >
    <div className="content flex flex-column justify-center items-center">
      <div className="text">
        <h1>Your profile summary of qualifications</h1>
      </div>
      <div className="form-group">
        <textarea style={{padding: "10px", border: "1px solid #888", width: "100%", resize: "none"}}
          /*value={this.state.achievements}*/
          placeholder="Enter your achievements"
          rows={20}
          cols={5}
          /*onChange={handleChange}*/
        />
      </div>
      <div className="form-group">
        <input  type="submit" value="Save and Next" />
      </div>
    </div>
  </form>
  )
}