import Button from "../../parts/Button";

export default function Masthead() {
  return (
    <div>
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">
            It's Nice To Meet You
          </div>
          <Button label="Tell Me More" />
        </div>
      </header>
    </div>
  );
}
