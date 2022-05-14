
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';

function Header(){
    return(
        <header>
            <nav>
                <div>
                    <div>
                        <PlaylistAddCheckCircleIcon />
                    </div>
                    <div>
                        To Do List.
                    </div>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Items</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
