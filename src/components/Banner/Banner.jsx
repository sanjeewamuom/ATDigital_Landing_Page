import "./Banner.scss";

export const Banner = ({ title, body, leftImage, rightImage }) => (
  <>
    <div className="banner">
      {leftImage && (
        <div className="image">
          <img src={leftImage} />
        </div>
      )}
      <div className="content">
        <div className="title">{title}</div>
        <div className="body">{body}</div>
        <div className="button">LEARN MORE</div>
      </div>
      {rightImage && (
        <div className="image">
          <img src={rightImage} />
        </div>
      )}
    </div>
  </>
);
