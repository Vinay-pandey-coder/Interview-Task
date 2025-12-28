import React, { useState } from "react";
import Input from "./component/Input";

const App = () => {
  const data = [
    { id: 1, title: "React Developer" },
    { id: 2, title: "Frontend Engineer" },
    { id: 3, title: "Backend Developer" },
    { id: 4, title: "Full Stack Developer" },
  ];
  const [search,setSearch] = useState("")

  const filterdData = data.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Job Search</h2>
      <Input search={search} setSearch={setSearch} />

      {
        filterdData.map((item)=>(
          <div key={item.id}>{item.title}</div>
        ))
      }
    </div>
  );
};

export default App;
