import React from "react";

class NavBar extends React.Component{
    render() {
        return (
            <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Merchandising React</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Ropa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Tazas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Stikers</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Decoración</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </>
        );
    }
}

export default NavBar;