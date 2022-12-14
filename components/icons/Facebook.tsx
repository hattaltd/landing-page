interface iProps {
    className: string;
}

const Facebook = ({className}: iProps) => {
    return (
        <svg 
            className={className}
            stroke="currentColor" 
            fill="none" 
            strokeWidth="0" 
            viewBox="0 0 24 24" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            height="1em" 
            width="1em" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
            >
            </path>
        </svg>
    )
}
export default Facebook;
