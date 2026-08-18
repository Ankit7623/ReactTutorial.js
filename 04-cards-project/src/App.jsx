import Card from "./components/card.jsx";

const App = () => {
  const jobOpenings = [
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-aa4QAmLM93FQ0PPNQ0kNuxwSr3C84c8GTgI6LotBg&s=10",
      name: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Pune",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUsmSXOaAQ-JZWs0QAk94oOgzXrFbWvnsNhBqom8SRhA&s=10",
      name: "Meta",
      datePosted: "2 weeks ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Mumbai",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
      name: "Amazon",
      datePosted: "3 days ago",
      post: "Software Development Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$52/hr",
      location: "Hyderabad",
    },
    {
      brandLogo:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPYAAACKCAMAAACuLEdAAAAAZlBMVEX///8AAAD8/Pzz8/P39/fc3Nzs7Ozw8PAvLy/n5+fk5ORKSkrIyMiPj49ycnK8vLzU1NRsbGxFRUVZWVkaGhoTExO1tbU2NjZ7e3uZmZmCgoJQUFCkpKQgICBeXl6tra0nJyc+Pj4eoqs4AAAEeklEQVR4nO2d2YKiMBBFCRAQ2aVFWQT5/58c0G4XgtqjKXJpOM881JWkUltQ0xYWFhYWFhYW3kdXbcDYmE4ab1lgqrZjTHSeFqwjMFSbMiKev2NnYlu1LaNh5T+i5/S206toxvYz8WnrgN3iq7ZnHHhzp5plqg0aBW91r/oQqrZoDKKeatY4qk0aAX7oqWaJapNGwN70VbNUtU0jkAuq2QxC01RUnau2iR6nEGXPwKH5oupStU308J2guvj7L1vPBNVzCFXsL0H2HLKQUFDdqDZpDIRIZTWDI1vThHfNVVs0BlFftafaolHo+fFjpNqgcYjvVO/mUkC79WiHQLU1o+FeVSfhDM7rby6yv9K/H5Fe+V7kTfg3uwG6YVuWbQjLeF8kcebdRiim5aw7HEt8elLYUZhmQeVukqAMvfWTJ03u1bl7jtIPmyB7/jQ0XhY0t+468esHWqJy3w9V26fTCQarep30S8GMbTexWCE0yqQRnjwpL/yJ7XuzPg4q6Rz3nl93rm56yaMHT+QTEm5GYt3kllXG1+0Ctrk3UDnt/0r1VOI3Z6BG1meTl2XwcEXcEUwjM4sG6qEfsZlCbuaJtaJP2eKX2GrpojvAO0Q6jWrGsNd5+Dsv9QbIVQhOppq5uMGqKd+bXahVi3tM/Nr6N3Et1doeI9b7JXHwgZMSx30t4C220KlYSaQa2okPtW3lgH1kE73sLbALb7HEooIUcuR9TebGC/AyA9HOxt7Ymk2jOlat6wXiHIoU0PslzwuB74LeETRotjZ0oNLiCYPCMiiAE5ATNFs7Q2+F7Ulkg1fQND14reH/WYEf2ppF4sgT3DrSGU6SasNf/3vR83oT+AnU/qUmOcBfJPBICsXwskOSaGWRjQmNbHyXRrK3Y/Q5BhpPXqFn2zSyd+h5Z9RQyIZPRdayx1XOoN+FsysS2RV6mYEk8WQMfTSLpswAH7D8YgDvLcBTz5BofAP8YyScqPF3AI9YGhrZ6N0gmhOMoZ/dZBMcDXSEuqaSzVxob04mm61US3sGUZx20g08x+HRyWYubpDqbCl1w87RG3QDpy1H2OicbOL0jAt6kNE0hG6oIkTXZr6+0/UpkI3flNKpnYAsINs0BbUrhWqFw1Cvcsg1rmkWreodanBOln2eKFFbYnRpWMsK9ODWNJ3ydcPGaZrG6VQjT2sZRPVyBj51S9Po7sDNPTuoqg3gFVSqgjliFnILzawxdtm4oyFQnaB3fEmKapP4/Kn8ZQ59eP1gy/bmBbo/OyN8V/9DYIPxHgOfHf+A6fzzhMwYdUL/nKTLW+Yb7Kj0HkdWbP4FnHgNIGscE/vSukgtpXw8HXf2g4yZrQm5swuf14+n+c9g/pNhtZVbVFWVFM9cQI6fgAxh1sN3KbZVVnt8bRuGw706e9Qhzib5rlv0aOB9F3V0P2NnR+lQGylFLYv/AqOflsR8yEuZXHgO/X7nC/jly7bHTfXsg9xh4O623w8GExfdsS7zfL/3M+9VD8uMar8l+zvfsNYnvFEXFhYWFgD5B4WPQf2WazkjAAAAAElFTkSuQmCC",
      name: "Apple",
      datePosted: "1 week ago",
      post: "UI Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Bengaluru",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTluh0zSa3EAAkP1U7u2L_Ah9CZqMOlpnd7PtEnhaNoOg&s=10",
      name: "Netflix",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$75/hr",
      location: "Remote",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGFJR-a0827PjlHAYz5Afmo_7FYLw2JY-2w07VfIYA&s=10",
      name: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Pune",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLaKS6lRGOkkxHIzgHJ0S_VMHZJA4MZbdlJbbK66B6_w&s=10",
      name: "Adobe",
      datePosted: "6 days ago",
      post: "Frontend Developer",
      tag1: "Hybrid",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Noida",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpb4JYmyfKH0li6gJepr5avtaw6RVzbrXaMUOoW6bOCQ&s=10",
      name: "NVIDIA",
      datePosted: "8 weeks ago",
      post: "UI Software Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Pune",
    },
    {
      brandLogo:
        "https://1000logos.net/wp-content/uploads/2017/04/Oracle-Logo-1.png",
      name: "Oracle",
      datePosted: "12 days ago",
      post: "JavaScript Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$42/hr",
      location: "Mumbai",
    },
    {
      brandLogo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmO3NvxWiCNfNaZtN0GcTPruKG4tjHPfCh3X0wQJAePg&s=10",
      name: "Salesforce",
      datePosted: "10 weeks ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$60/hr",
      location: "Solapur",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card
              company={elem.name}
              post={elem.post}
              pay={elem.pay}
              location={elem.location}
              tag1={elem.tag1}
              tag2={elem.tag2}
              logo={elem.brandLogo}
              datePosted={elem.datePosted}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
