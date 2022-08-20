import React from "react";
import { useParams } from "react-router-dom";
const workDetails = [{
    title:"BillEasy Research",
    description:"Creating an efficient accounting process for evolving businesses and enhanced work systems.",
    domain:"Accounting",
    role:{
        projectType:"In-house,Fin-Tech",
    role:"UI & UX Design Intern",
    timeline:"3 months",
    team:"Myself",
    contribution:"Interviews, Qualitative Research,  Ethnographic Research, Competitive Audit, Interface Designs, Testing."
    },
    concept:{
        title:"BillEasy",
        description:"Introducing BillEasy. An **Easy, Efficient and Convenient** digital Invoicing experience. A solution designed to help accounting teams **create, share, store, and track GST-compliant invoices** in just a few clicks, from **anywhere and at any time!**\nNo more manual entries, tedious work processes, data loss or struggle to recall complex Excel shortcuts. From **fast-tracking** and **organizing data** to **streamlining your work** processes to **improve productivity**, BillEasy has you covered😎"
    },
    purpose:{
        goals:[
            "Optiimize efficiency",
            "Minimmal learning curve",
            "Save time"
        ],
        targetAudience:{
            directUsers:[
                'Accounts team',
            ],
            indirectUsers:[
                "Stakeholders",
                "Business Intelligence",
            ]
        }
    },

    challenge:{
        content:"How might we design a B2B invoicing experience which is intuitive and helps our team to fasten up the process by completing tasks, resulting in increased productivity and time savings?"
    },
    research:{
        
    }

}];
const Works = () => {
  let params = useParams();
  const workName = params.workName;
  return <div>Works {workName}</div>;
};

export default Works;
