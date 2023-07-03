import SearchBar from './SearchBar';

export default function Nav({ characterID }) {
    return <nav>
        <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </nav>
}