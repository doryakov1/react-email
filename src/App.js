import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import $ from 'jquery';
import HomePage from './Components/HomePage';
import EmailDetails from './Components/EmailDetails';
;
function App() {

  const getCreatedAt = () => {
    let newDate = new Date();
    let getTime = newDate.getFullYear() + '-' +
      (newDate.getMonth() + 1) + '-' +
      newDate.getDate() +
      ' At: ' + newDate.getHours() + ':' + newDate.getMinutes()

    return getTime;
  }
  const [emailAlert, setEmailAlert] = useState('');
  const [showComp, setShowComp] = useState(true);
  const [emails, setEmails] = useState([
    { date: getCreatedAt(), from: 'Email app', to: 'No-reply', subject: 'Hello and wellcome to email app.', message: 'Your HomePage is empty, start by sending an email to any address you want, and from any address you would like.',history:[{
      date: getCreatedAt(),
      from: 'Email app',
      to: 'No-reply',
      subject: 'Hello and wellcome to email app, delete this email after read!',
      message: 'Your HomePage is empty, start by sending an email to any address you want, and from any address you would like.',
    }]},
  ]);
  const sendAddEmail = (to, from, subject, message) => {
    setEmailAlert(<span class="loader"></span>);
    $.ajax({
      type: 'GET',
      url: "http://completewebdevelopercourse.com/content/9-mobileapps/sendemail.php?callback=response",
      data: {
        to: to,
        from: from,
        subject: subject,
        message: message
      },
      dataType: 'jsonp',
      context: $('body'),
      success:  (data) =>{
        if (data.success == true) {
          setEmailAlert('');
          setShowComp(!showComp);
          setTimeout(() => {
            setShowComp(showComp);
          }, '500')
          let email = {
            date: getCreatedAt(),
            from: from,
            to: to,
            subject: subject,
            message: message,
            history: [{
              date: getCreatedAt(),
              from: from,
              to: to,
              subject: subject,
              message: message,
            }]
          }


          const isNameEquel = (email) => email.to == to;
          const idx = emails.findIndex(isNameEquel);

          if (idx == -1) {
            setEmails([email ,...emails]);
          }else{
            emails[idx].history.unshift(email)
          }

        }
        else {
          setEmailAlert('Email could not be sent');
        }
      },
      error:  (xhr, type) => {
        setEmailAlert('Email could not be sent')
      }
    })
  }
  const deleteEmail=(index)=>{
    let emailsCopy = [...emails];
    emailsCopy.splice(index, 1);
    setEmails([...emailsCopy]);
  }
  const filterEmails = (keySearch) => {
    if (keySearch.length == 0 || emails.length == 0) {
      setEmails([
        { date: getCreatedAt(), from: 'Email app', to: 'No-reply', subject: 'Hello and wellcome to email app.', message: 'Your HomePage is empty, start by sending an email to any address you want, and from any address you would like.',history:[{
          date: getCreatedAt(),
          from: 'Email app',
          to: 'No-reply',
          subject: 'Hello and wellcome to email app, delete this email after read!',
          message: 'Your HomePage is empty, start by sending an email to any address you want, and from any address you would like.',
        }]},
      ]);
      return;
    }
    let emailsCopy = [...emails];
    const result = emailsCopy.filter(email => email['to'].includes(keySearch));
    setEmails([...result]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/react-email" element={<HomePage emails={emails} sendAddEmail={sendAddEmail}  filterEmails={filterEmails} emailAlert={emailAlert} showComp={showComp} />} />
          {emails.map((email, idx) => {
            return (<Route path={"/react-email/emaildetails" + email.to} element={<EmailDetails idx={idx} date={email.date} to={email.to} from={email.from} subject={email.subject} message={email.message} emailHistory={email.history} sendAddaEmail={sendAddEmail} deleteEmail={deleteEmail} />} />)
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
