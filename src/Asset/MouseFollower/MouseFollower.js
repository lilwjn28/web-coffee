import React, { useEffect, useState } from "react";
import "./MouseFollower.css";

const MouseFollower = () => {
    const numChasers = 5; // Số lượng hình tròn
    const distanceBetween = 0; // Khoảng cách giữa các hình tròn
    const [chasers, setChasers] = useState([]);

    useEffect(() => {
        const initialChasers = Array.from({ length: numChasers }, (_, index) => ({
            id: index,
            x: -100, // Bắt đầu ngoài màn hình
            y: -100, // Bắt đầu ngoài màn hình
            opacity: 1, // Độ mờ ban đầu
        }));
        setChasers(initialChasers);
    }, [numChasers]);

    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
        targetX = event.clientX;
        targetY = event.clientY + window.scrollY; // Cập nhật tọa độ y với vị trí cuộn
    };

    useEffect(() => {
        const updateChasers = () => {
            setChasers((prevChasers) =>
                prevChasers.map((chaser, index) => {
                    const leaderX = index === 0 ? targetX : prevChasers[index - 1].x;
                    const leaderY = index === 0 ? targetY : prevChasers[index - 1].y;

                    const dx = leaderX - chaser.x;
                    const dy = leaderY - chaser.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const speed = 0.1; // Tốc độ di chuyển

                    // Cập nhật vị trí chaser
                    if (distance > distanceBetween) {
                        chaser.x += dx * speed;
                        chaser.y += dy * speed;
                    }

                    // Tính toán độ mờ dựa trên chỉ số vị trí
                    const opacity = 1 - (index / numChasers); // Độ mờ giảm dần theo chỉ số
                    return { ...chaser, opacity }; // Cập nhật độ mờ cho chaser
                })
            );

            requestAnimationFrame(updateChasers); // Gọi lại hàm cập nhật
        };

        window.addEventListener('mousemove', handleMouseMove);
        updateChasers(); // Bắt đầu cập nhật

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [numChasers]);
  return (
    <>
        <div className="follows-mouse">
            {chasers.map((chaser) => (
                <div
                    key={chaser.id}
                    className="chaser"
                    style={{
                        left: chaser.x + 'px',
                        top: chaser.y + 'px',
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        backgroundColor: 'rgba(255, 87, 51, 0.8)',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        transition: 'transform 0.1s ease, opacity 0.1s ease',
                        opacity: chaser.opacity, // Cập nhật độ mờ cho chaser
                    }}
                />
            ))}
        </div>
    </>
  );
};

export default MouseFollower;
