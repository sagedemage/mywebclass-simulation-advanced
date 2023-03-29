import React from "react";
import Link from "next/link";

function FooterExample() {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Copyright &copy; MyWebClass</p>
          </div>
          <div className="col-md-6 text-md-right">
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterExample;
