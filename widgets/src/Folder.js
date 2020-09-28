import React from 'react';

const Headers = ({ titles, selectTab, currentTab}) => {

  const handleClick = (e) => {
    const index = parseInt(e.target.id, 10);
    selectTab(index)
  }

  return (
    <ul className="tab-header" >
      {titles.map((title, index) => {
        const headerClass = (index === currentTab) ? 'active' : '';
        return (
          // <label htmlFor={index} className="active-label"></label>
          <li key={index} id={index} onClick={handleClick} className={headerClass}>
            {title}
          </li>
        );
      })};
    </ul>
  )
}


class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 0
    }
  }

  selectTab = (index) => {
    this.setState({ currentTab: index });
  }

  render() {
    const folder = this.props.folders[this.state.currentTab];

    const titles = this.props.folders.map(folder => folder.title);
    return (
      <div>
        <h1>Folder</h1>
        <div className='tabs'>
          <Headers
            titles={titles}
            currentTab={this.state.currentTab}
            selectTab={this.selectTab}
          />
          <div className='tab-content'>
            {folder.content}
          </div>
        </div>
      </div>
    )
  }
}

export default Folder;
