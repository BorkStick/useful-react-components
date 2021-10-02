import React from "react";
import './SidebarFixedLeft.css'


export default function Sidenav() {
  return (
    <div class="">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-left">
        <a class="navbar-brand" href>Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
                aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Contact</a>
                </li>
            </ul>
            
        </div>
    </nav>
    
    
    </div>
  );
}
