class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<div class="navbar">
    <div class="dropdown">
        <button class="dropbtn">B Cell Examples</button>
        <div class="dropdown_content">
            <a href="/" passHref>B Cell</a>
        </div>
    </div>
    <div class="dropdown">
            <button class="dropbtn">sRBC Examples</button>
            <div class="dropdown_content">
                <a href="/srbc/index.html" passHref>Many floating cells</a>
                <a href="/srbc/ex_2.html" passHref>Single event</a>
                <a href="/srbc/ex_3.html" passHref>Excess ruffling</a>
            </div>
        </div>
    <div class="dropdown">
        <button class="dropbtn">mRBC Examples</button>
        <div class="dropdown_content">
            <a href="/mrbc/index.html" passHref>mRBC 1</a>
            <a href="/mrbc/ex_2.html" passHref>mRBC 2 </a>
            <a href="/mrbc/ex_3.html" passHref>mRBC 3</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">mRBC Miap</button>
        <div class="dropdown_content">
            <a href="/mmiap/index.html" passHref>mmiap 1</a>
            <a href="/mmiap/ex_2.html" passHref>mmiap 2 </a>
            <a href="/mmiap/ex_3.html" passHref>mmiap 3</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Bcell Example</button>
        <div class="dropdown_content">
            <a href="/localviewer" passHref>Surface colored as motion</a>
            <a href="/eat_d3HL60" passHref> Eat d3HL60</a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">dHL60 Motion</button>
        <div class="dropdown_content">
            <a href="/dhl60_day2" passHref>Day 2 </a>
            <a href="/dhl60_day3" passHref>Day 3 </a>
            <a href="/dhl60_day4" passHref>Day 4 </a>
            <a href="/dhl60_day5" passHref>Day 5 </a>
            <a href="/dhl60_day6" passHref>Day 6 </a>
        </div>
    </div>
    <div class="dropdown">
        <button class="dropbtn">AktPH Surface Int</button>
        <div class="dropdown_content">
            <a href="/csf_starve" passHref>CSF-1 Starved</a>
            <a href="/csf_stim" passHref>CSF-1 Stimulation</a>
        </div>
    </div>
</div>
`
    }
}

customElements.define('nav-bar', NavBar)