import React, {useState} from 'react'
import { Fab } from '@mui/material'
import { MdRequestQuote } from 'react-icons/md'
import RequestQuoteIcon from '@mui/icons-material/RequestQuote' 
import "./Getquote.css"

const Getquote = () => {
  const [clickTab, setClickTab] = useState(false);
  
  const style ={
    width: 180,
    margin:0,
    top: 'auto',
    right: 20,
    bottom: 45,
    left: 'auto',
    position: 'fixed',
}
  return (
    <Fab className="fab" style={style} variant="extended" color="primary" size="large" aria-label="add">
    <RequestQuoteIcon /> Get Quote
    </Fab>
  )
}

export default Getquote