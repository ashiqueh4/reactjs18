import React, { useState,useEffect } from 'react'
import Header from './Header'
import { v4 as uuid } from 'uuid';
import Confirm from './Confirm';


const formdata=()=>{
  const formdata = localStorage.getItem("allItem")
  if(formdata){
    return JSON.parse(formdata)
  }else{
    return ([])
  }
}
const Projects = () => {
  const unique_id = uuid();
  const id = unique_id.slice(0,3)

const [initialValues, setInitialValues] = useState({
  siteName: "",
  siteUrl: "",
  id: "",
});

const [allItem,setAllItem]=useState(formdata)

const [error,setError]=useState({
  siteNamev:"",
  siteUrlvv:"",
  siteUrlv:""
})

const urlPatternValidation = URL => {
  const regex = new RegExp('((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)');    
  return regex.test(URL);
};

useEffect(() => {
  
  localStorage.setItem("allItem", JSON.stringify(allItem));
 
}, [allItem]);

const formSubmit=(e)=>{
  e.preventDefault();
  
  if(initialValues.siteName.length === 0 && initialValues.siteUrl.length === 0 ){
     setError({...error,siteNamev:true,siteUrlvv:true})
  }
    if(initialValues.siteName.length > 0 && initialValues.siteUrl.length === 0 ){
      setError({...error,siteNamev:false,siteUrlvv:true})
    }
    if(initialValues.siteName.length === 0 && initialValues.siteUrl.length > 0 ){
      setError({...error,siteNamev:true,siteUrlvv:false})
      
    }

  if(initialValues.siteUrl.length > 0 && !urlPatternValidation(initialValues.siteUrl)){
     setError({...error,siteUrlv:true,siteNamev:false,siteUrlvv:true})
  }
  if(initialValues.siteUrl.length > 0 && urlPatternValidation(initialValues.siteUrl)){
    setError({...error,siteUrlv:false,siteNamev:false,siteUrlvv:false})
 }
 if(initialValues.siteName.length > 0 && initialValues.siteUrl.length > 0 && urlPatternValidation(initialValues.siteUrl)){
  setAllItem((prevallItem) => [...prevallItem, { ...initialValues, id: id }]);
 setError({...error,siteNamev:false,siteUrlvv:false})
  }

}


const [open, setOpen] =useState({
  show: false,
  id:null
})
  
const handleConfirm =(result ,id)=> {
  if (result) {
      let latestitems = allItem.filter(item => item.id !== id)
      setAllItem(latestitems)
      setOpen({...open,show:false})
  }
  
  setOpen({...open,show:false})
}

const strAscending = allItem.sort((a, b) =>a.siteName > b.siteName ? 1 : -1,);


return (
  <>
  <Header/>
  <Confirm 
        text={'are you sure?'}
        open={open.show}
        id={open.id}
        handleConfirm={handleConfirm}
      />
  <div className='form_title'>
  <h1>Create Site List</h1>
  </div>
<div className='projectdeatils'>
<div className='createsitelist'>
<div className='formwrapper'>

<form>
<div>
<label className='error'>{ error.siteNamev && 'Enter Your Site Name'}</label>
<input type="text" name="sitename" className="sitename" onChange={(e)=>{setInitialValues({ ...initialValues, siteName: e.target.value })}} placeholder='Site Name'></input>
</div>
<div>
<label className='error'>{ error.siteUrlvv && (error.siteUrlv ?'Enter Site Url Is Not Valide':'Enter Your Site Url')}</label>
<input type="text" name="siteurl" className="siteurl" onChange={(e)=>{setInitialValues({ ...initialValues, siteUrl: e.target.value })} } placeholder='Site Url'></input>
</div>

<div className="form-action-buttons">
<input type="submit" value="Submit" className='formsubmit' onClick={formSubmit}></input>
</div>
</form>
</div>
</div> 

<div className='tablewrapper'>
<table className="list">
<thead>
    <tr>
        <th>Id</th>
        <th>Site Name</th>
        <th>Site Url</th>
        <th>Delete</th>
    </tr>
   
    { 
      
      strAscending.sort().map((item,index)=>{
      
      return(
        <tr key={item.id}>
         <td>{index+1}</td> 
        <td>{item.siteName}</td>
        <td><a href={item.siteUrl} className='openlink' target="_blank"
        rel="noreferrer">{item.siteUrl}</a></td>
        <td><button className='delite' onClick={() => setOpen({...open,show:true,id: item.id})}>Delete</button></td>
        </tr>
      )
      
    }) }
</thead>
<tbody>

</tbody>
</table>
{ allItem.length===0 && (
      <div className='norecode'>
          <h3>
           No Recode Is Available
          </h3> 
         </div>)
         }
</div>
</div>

</>
  )
}

export default Projects