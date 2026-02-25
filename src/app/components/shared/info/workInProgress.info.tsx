import { FC } from "react";
import { Button, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

interface WorkInProgressProps {
  description?: string;
  showHomeButton?: boolean;
}

const WorkInProgressInfo: FC<WorkInProgressProps> = ({
  description = "I am working on to clone this feature. Stay tuned for updates!",
  showHomeButton = true,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] md:min-h-[calc(100vh-12rem)] px-4 py-6">
      <div className="max-w-lg w-full text-center">
        {/* Animated SVG Illustration */}
        <div className="mb-4 md:mb-8 animate-bounce-slow">
          <svg
            className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Construction Cone */}
            <g className="animate-pulse">
              <path
                d="M100 40 L130 100 L70 100 Z"
                fill="#FF6B35"
                stroke="#C74D2A"
                strokeWidth="2"
              />
              <path
                d="M70 100 L130 100 L135 115 L65 115 Z"
                fill="#FFFFFF"
                stroke="#E0E0E0"
                strokeWidth="1"
              />
              <path
                d="M65 115 L135 115 L140 130 L60 130 Z"
                fill="#FF6B35"
                stroke="#C74D2A"
                strokeWidth="2"
              />
              <path
                d="M60 130 L140 130 L145 145 L55 145 Z"
                fill="#FFFFFF"
                stroke="#E0E0E0"
                strokeWidth="1"
              />
              <ellipse
                cx="100"
                cy="145"
                rx="45"
                ry="8"
                fill="#2E3B61"
                opacity="0.8"
              />
            </g>

            {/* Tools */}
            <g className="animate-wiggle">
              {/* Wrench */}
              <path
                d="M150 120 L155 115 L160 120 L160 125 L150 125 Z"
                fill="#4A5568"
                stroke="#2D3748"
                strokeWidth="1.5"
              />
              <rect
                x="148"
                y="125"
                width="14"
                height="25"
                rx="2"
                fill="#4A5568"
                stroke="#2D3748"
                strokeWidth="1.5"
              />

              {/* Hammer */}
              <rect
                x="35"
                y="125"
                width="6"
                height="30"
                rx="1"
                fill="#8B4513"
              />
              <rect
                x="28"
                y="115"
                width="20"
                height="12"
                rx="2"
                fill="#6B7280"
                stroke="#4A5568"
                strokeWidth="1.5"
              />
            </g>

            {/* Gear Animation */}
            <g
              className="animate-spin-slow origin-center"
              style={{ transformOrigin: "50px 60px" }}
            >
              <circle cx="50" cy="60" r="12" fill="#56B0FF" opacity="0.7" />
              <circle cx="50" cy="60" r="6" fill="#2E3B61" />
              {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <rect
                  key={i}
                  x="48"
                  y="48"
                  width="4"
                  height="8"
                  rx="1"
                  fill="#56B0FF"
                  transform={`rotate(${angle} 50 60)`}
                  style={{ transformOrigin: "50px 60px" }}
                />
              ))}
            </g>

            {/* Progress Dots */}
            <g className="animate-pulse-dots">
              <circle cx="100" cy="165" r="3" fill="#56B0FF" opacity="0.8" />
              <circle cx="112" cy="165" r="3" fill="#56B0FF" opacity="0.6" />
              <circle cx="124" cy="165" r="3" fill="#56B0FF" opacity="0.4" />
            </g>
          </svg>
        </div>

        {/* Content */}
        <div className="space-y-2 md:space-y-4">
          <Title
            level={1}
            className="mb-2! text-2xl! md:text-3xl! lg:text-4xl!"
          >
            🚧 Work in Progress
          </Title>

          <Paragraph className="text-sm md:text-base lg:text-lg text-neutral-500 dark:text-neutral-400 max-w-sm mx-auto px-4">
            {description}
          </Paragraph>

          {showHomeButton && (
            <Link to={"/home/my-space/overview"}>
              <Button
                type="primary"
                size="middle"
                icon={<HomeOutlined />}
                onClick={() => navigate("/home/my-space/overview")}
                className="mt-4 md:mt-6"
              >
                Go to Home
              </Button>
            </Link>
          )}
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes wiggle {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes pulse-dots {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @keyframes progress-bar {
          0% {
            width: 0%;
          }
          100% {
            width: 60%;
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        .animate-pulse-dots {
          animation: pulse-dots 1.5s ease-in-out infinite;
        }
        
        .animate-progress-bar {
          animation: progress-bar 2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WorkInProgressInfo;
