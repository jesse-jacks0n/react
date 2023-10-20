export default function SidePanel() {
  return <div className="side-panel">
    <Logo />
    <AddFile />
    </div>;
}
 function Logo() {
  return (
    <div className="logo-container">
      <div className="logo-background">
        <p className="logo">C</p>
      </div>
      <h4 className="logo-name">CLOUDY</h4>
    </div>
  );
 }

 function AddFile(){
  return(
    <div className="add-file">
      <p>Add<br/> New File</p>
      <div className="file-add-icon">
        <p className="add">+</p>
      </div>
    </div>
  );
 }