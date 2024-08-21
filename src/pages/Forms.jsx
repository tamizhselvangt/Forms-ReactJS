import "./Forms.css"
import FormFeild from "./FormFeild"
import SelectionFeild from "./SelectionField"
export default function Forms(){
  return(
    <div className="forms">
    <div className="form-field">
         <FormFeild lableName="First Name" placeHol = "First Name" req = "First Name" />
         <FormFeild lableName="Middle Name" placeHol = "Middle Name" req = "Middle Name" />
         <FormFeild lableName="Last Name" placeHol = "Last Name" req = "Last Name" />
         <FormFeild lableName="Birth Date" placeHol = "DOB" req = "Date" type="date" />
         <FormFeild lableName="E-Mail" placeHol = "email" req = "Email" />
         <FormFeild lableName="Phone Number" placeHol = "phone number" req = "Phone Number" />
         <SelectionFeild lableName="Select Gender" options={["Selct","Male","Femal","Others"]}/>
         <FormFeild lableName="Start Time" placeHol = '' req = "Start time" type="time" />
         <FormFeild lableName="End Time" placeHol = '' req = "End time" type="time" />
         <FormFeild lableName="Job Position" placeHol = 'job position' req = "Job Position"  />
         <SelectionFeild lableName="Select Teams" options={["A","B","C"]}/>
         <SelectionFeild lableName="Designations" options={["Select","Student","Staff","Administrator", "Office-Worker"]}/>
         <FormFeild lableName="Billable Hours" placeHol = 'billable hours' req = "Billable Hours"  />

    </div>
    <button>Submit</button>
    </div>
  )
}
