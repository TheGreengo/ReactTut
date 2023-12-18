import DistEntry from "./distentry";

function getDist() {
    return [
        {'letter': 'E', 'top': 60},
        {'letter': 'D-', 'top': 63},
        {'letter': 'D', 'top': 67},
        {'letter': 'D+', 'top': 70},
        {'letter': 'C-', 'top': 73},
        {'letter': 'C', 'top': 77},
        {'letter': 'C+', 'top': 80},
        {'letter': 'B-', 'top': 83},
        {'letter': 'B', 'top': 87},
        {'letter': 'B+', 'top': 90},
        {'letter': 'A-', 'top': 93},
        {'letter': 'A', 'top': 100}
    ];
}

function Distribution() {
    const grades = getDist();

    return (
        <div>
            {
                grades.map(thing => (
                    (
                        <DistEntry key={thing.top} thang={thing}/>
                    )
                ))
            }
        </div>
    );
}

export default Distribution