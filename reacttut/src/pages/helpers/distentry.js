function DistEntry({ thang }) {
    return (
        <div className="chunk">
            <div className="chunkling"></div>
            <div className="chunkling">{thang.top}</div>
            <div className="chunkling">{thang.letter}</div>
            <div className="chunkling">|</div>
        </div>
    );
}

export default DistEntry