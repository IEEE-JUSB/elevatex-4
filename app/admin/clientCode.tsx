'use client'
import React, { useEffect, useRef, useState } from 'react'
import { AdminDataType, closeRegistration, getAdminData, getRegistrations } from './adminUtils';
import { CircleX } from 'lucide-react';
import toast from 'react-hot-toast';

function ClientCode() {
  const [adminData, setAdminData] = useState<AdminDataType>();
  const [closingEvent, setClosingEvent] = useState("");
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = (eventName: string) => {
    setClosingEvent(eventName);
    dialogRef.current?.showModal();
  };

  const handleCloseDialog = () => {
    dialogRef.current?.close();
  }

  const handleCloseRegistrations = (eventName: string) => {
    const closingEventId = adminData?.eventRegistrations.find(e => e.name === eventName)?.id;
    if(!closingEventId){
      toast.error("Error");
      return;
    }
    closeRegistration(closingEventId)
    .then(res=>{
      if(res) toast.success(`Registrations closed for ${closingEvent}`);
      else toast.error(`Failed to close regs for ${closingEvent}`);
    }).finally(()=>{
      handleCloseDialog();
    })
  }

  const handleDownload = (eventId: string) => {
    getRegistrations(eventId)
    .then(data => {
      if(!data){
        alert('Error');
        return;
      }
      const csvString = [
      ["Name", "Email", "Phone", "College", "Department", "Year"], // Specify your headers here
      ...data.map(item => [item.name, item.email, item.phone, item.college, item.department, item.year]) // Map your data fields accordingly
    ]
    .map(row => row.join(","))
    .join("\n");

    // Create a Blob from the CSV string
    const blob = new Blob([csvString], { type: 'text/csv' });

    // Generate a download link and initiate the download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'registrations.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    })
  }

  useEffect(()=>{
    getAdminData()
    .then(res => setAdminData(res))
  },[]);

  return (
    <div className='min-h-screen bg-blue-400 p-6 flex flex-col items-center'>
      <h1 className='text-3xl'>Admin</h1>
      <p>Total Registrations: {adminData?.totalRegistrations ?? "Error"}</p>
      <h2 className='text-xl my-8'>Event Data</h2>
      {adminData?.eventRegistrations.map((e) => <div key={e.name} className={`p-2 hover:bg-gray-800/30 transition-colors duration-200 grid grid-cols-4 place-items-center w-4/5 rounded-lg`}>
        <p>{e.name}</p>
        <p>{e.count}</p>
        <button className='bg-white/70 px-2 py-1 rounded-md w-fit cursor-pointer'
        onClick={()=>openDialog(e.name)} disabled={e.regsOpen === false}>
          {e.regsOpen ? "Close Registrations" : "Registrations already closed"}
        </button>
        <button className='bg-white' onClick={()=>handleDownload(e.id)}>CSV</button>
      </div>)}
      <dialog ref={dialogRef} className='backdrop:bg-gray-800/80 rounded-xl bg-blue-400 font-syne p-3 outline-none top-1/2 left-1/2 -translate-1/2 w-4/5 sm:w-1/2'>
        <CircleX className='absolute top-5 right-5 z-10 cursor-pointer' onClick={handleCloseDialog}/>
        <div className='flex flex-col items-center gap-y-3'>
        <h2 className='text-xl'>Confirmation</h2>
        <p>Are you sure you want to close registrations for {closingEvent}?</p>
        <button onClick={()=>handleCloseRegistrations(closingEvent)} className='bg-red-300 px-4 py-1 rounded-md'>Yes</button>
        </div>
      </dialog>
    </div>
  )
}

export default ClientCode