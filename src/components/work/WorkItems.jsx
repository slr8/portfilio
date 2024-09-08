// import React from 'react'

// const WorkItems = ({item}) => {
//   return (
//     <div className="work__card" key={item.id}>
//         <img src={item.image} alt="" className='work__img'/>
//         <h3 className="work__title">{item.title}</h3>
//         <a href="https://github.com/Atharva-3000" target="_blank" className="work__button">
//             Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
//         </a>
//     </div>
//   )
// }

// export default WorkItems
const WorkItems = ({ item, demo,github }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="demogithub">
        <a
          href={demo}
          target="_blank"
          className="work__button"
          rel="noreferrer"
        >
          Demo<i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a
          href={github}
          target="_blank"
          className="work__button"
          rel="noreferrer"
        >
          Github<i class="uil uil-github-alt work__button-icon"></i>

        </a>
      </div>
    </div>
  );
};

export default WorkItems;
