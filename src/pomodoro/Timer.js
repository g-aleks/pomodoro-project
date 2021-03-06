import React from "react"
import Bar from "./Bar"

function Timer({session, focusDuration, breakDuration, minutesToDuration, secondsToDuration}){
    
    return session && (
    <div>
    {/* This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
    <div className="row mb-2">
        <div className="col">
        {/* Update message below to include current session (Focusing or On Break) total duration */}
        <h2 data-testid="session-title">
            {session?.label === "Focusing" ? `${session?.label} for ${minutesToDuration(focusDuration)} minutes` : `${session?.label} for ${minutesToDuration(breakDuration)} minutes`}
        </h2>
        {/* Update message below correctly format the time remaining in the current session */}
        <p className="lead" data-testid="session-sub-title">
        {secondsToDuration(session?.timeRemaining)} remaining
        </p>
        </div>
    </div>
    <Bar session={session} focusDuration={focusDuration} breakDuration={breakDuration}/>
    </div>
    )
}

export default Timer