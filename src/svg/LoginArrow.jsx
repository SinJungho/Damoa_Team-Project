export default function LoginArrow() {
    return (
        <svg
            width={21}
            height={20}
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                flexGrow: 0,
                flexShrink: 0,
                width: 20,
                height: 20,
                position: 'relative',
            }}
            preserveAspectRatio="xMidYMid meet"
        >
            <path d="M3.625 10H17.375" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path
                d="M11.75 4.375L17.375 10L11.75 15.625"
                stroke="white"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
