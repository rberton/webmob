<?php
if(!preg_match('/iUI/', $_SERVER['REQUEST_URI'])) {
?>
        <nav id="footer">
            <ul>
                <li>
                    <a href="search.php">Search</a>
                </li>
                <li>
                    <a href="last.php">Last</a>
                </li>
                <li>
                    <a href="random.php">Random</a>
                </li>
                <li>
                    <a href="legal.php">Legal</a>
                </li>
            </ul>
        </nav>
<?php
}
?>