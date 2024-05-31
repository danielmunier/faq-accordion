import './App.css';
import Accordion from './components/Accordion/Accordion';

function App() {

    const accordionData = [
    {
      id: 0,
      title: "How many team members can I invite?",
      description: `You can invite up to 2 additional users on the Free plan.
       There is no limit on team members for the Premium plan`,
       active: false
    },
    { 
      id: 1,
      title: "What is the maximum file upload size?",
      description: "No more than 2GB. All files in your account must fit your allotted storage space.",
       active: false
    },
    { 
      id: 2,
      title: "How do I reset my password?",
      description: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
       active: false
    },
    {
      id: 3,
      title: "Can I cancel my subscription?",
      description: "Yes! Send us a message and we'll process your request no questions asked.",
       active: false
    },
    {
      id: 4,
      title: "Do you provide additional support?",
      description: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
       active: false
    }
  ]


  return (
    <div className="App">
      <div id='bg-img'></div>
      <Accordion questionsData={accordionData}/>

    </div>
  );
}

export default App;
