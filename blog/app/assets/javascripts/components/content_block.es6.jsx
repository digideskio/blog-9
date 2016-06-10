class ContentBlock extends React.Component {

  propTypes: {
    contentBlocks: React.PropTypes.array
  }

  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {

    event.preventDefault();
    event.stopPropagation();

    const blockType = event.currentTarget.className;
    const nBlocks = this.props.contentBlocks.size;

    switch (blockType) {
      case "video":
          this.props.contentBlocks.push(<VideoBlock key={nBlocks + 1}/>);
          break;
      default:
          console.log("Unknown block type");
    }
    this.setState({});
  }

  render () {
    return (
      <section className="content-blocks">
        <ContentBlockList blocks={this.props.contentBlocks} />
        <div className="article-content-type" >
          <ul>
            <li className="video" onClick={this.handleClick}><a href="#"></a></li>
            <li className="photo" onClick={this.handleClick}><a href="#"></a></li>
            <li className="code" onClick={this.handleClick}><a href="#"></a></li>
            <li className="paragraph" onClick={this.handleClick}><a href="#"></a></li>
          </ul>
        </div>
      </section>
    );
  }
}

ContentBlock.propTypes = {
  contentType: React.PropTypes.array
};
