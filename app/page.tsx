'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [studentName, setStudentName] = useState('Student Name');
  const [className, setClassName] = useState('XII');
  const [rollNumber, setRollNumber] = useState('Roll No: 00');
  const [teacherName, setTeacherName] = useState('Teacher Name');
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.coverPage}>
        {/* Decorative Chemistry Elements - Top */}
        <div className={styles.decorTop}>
          <svg className={styles.molecule} viewBox="0 0 100 100">
            <circle cx="20" cy="20" r="8" fill="#4ECDC4" />
            <circle cx="50" cy="20" r="8" fill="#4ECDC4" />
            <circle cx="80" cy="20" r="8" fill="#4ECDC4" />
            <line x1="28" y1="20" x2="42" y2="20" stroke="#4ECDC4" strokeWidth="2" />
            <line x1="58" y1="20" x2="72" y2="20" stroke="#4ECDC4" strokeWidth="2" />
          </svg>

          <svg className={styles.beaker} viewBox="0 0 100 100">
            <path d="M30,20 L30,60 L25,80 L75,80 L70,60 L70,20 Z"
                  fill="none" stroke="#FFE66D" strokeWidth="3" />
            <line x1="25" y1="20" x2="75" y2="20" stroke="#FFE66D" strokeWidth="3" />
            <path d="M35,65 Q50,70 65,65" fill="#FFE66D" opacity="0.3" />
          </svg>
        </div>

        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>CHEMISTRY PROJECT</div>
          <h1 className={styles.mainTitle}>
            <span className={styles.titleWord}>FAT</span>
            <span className={styles.titleWord}>ANALYSIS</span>
            <span className={styles.titleWord}>IN CHIPS</span>
          </h1>
          <div className={styles.subtitle}>
            A Comprehensive Study of Lipid Content in Popular Snack Foods
          </div>
        </div>

        {/* Central Image Section */}
        <div className={styles.centralImage}>
          <div className={styles.imageCircle}>
            <svg viewBox="0 0 200 200" className={styles.chipsIllustration}>
              {/* Chip 1 */}
              <ellipse cx="80" cy="90" rx="40" ry="35" fill="#FFD93D" opacity="0.9" />
              <ellipse cx="80" cy="90" rx="35" ry="30" fill="#FCB900" opacity="0.7" />
              <path d="M60,85 Q80,75 100,85" stroke="#F4A900" strokeWidth="2" fill="none" />
              <path d="M65,95 Q80,88 95,95" stroke="#F4A900" strokeWidth="2" fill="none" />

              {/* Chip 2 */}
              <ellipse cx="120" cy="100" rx="38" ry="33" fill="#FFD93D" opacity="0.85"
                       transform="rotate(25 120 100)" />
              <ellipse cx="120" cy="100" rx="33" ry="28" fill="#FCB900" opacity="0.7"
                       transform="rotate(25 120 100)" />
              <path d="M105,95 Q120,88 135,98" stroke="#F4A900" strokeWidth="2" fill="none" />

              {/* Fat molecules */}
              <circle cx="70" cy="70" r="4" fill="#FF6B6B" className={styles.molecule1} />
              <circle cx="85" cy="65" r="3" fill="#FF6B6B" className={styles.molecule2} />
              <circle cx="130" cy="85" r="4" fill="#FF6B6B" className={styles.molecule3} />
              <circle cx="115" cy="75" r="3" fill="#FF6B6B" className={styles.molecule1} />
            </svg>
          </div>

          {/* Chemical Formula */}
          <div className={styles.chemicalFormula}>
            <div className={styles.formulaBox}>
              C<sub>55</sub>H<sub>98</sub>O<sub>6</sub>
              <div className={styles.formulaLabel}>Triglyceride Structure</div>
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div className={styles.infoGrid}>
          <div className={styles.infoCard}>
            <div className={styles.infoLabel}>Submitted By</div>
            <input
              type="text"
              className={styles.infoValue}
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoLabel}>Class</div>
            <input
              type="text"
              className={styles.infoValue}
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoLabel}>Roll Number</div>
            <input
              type="text"
              className={styles.infoValue}
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              disabled={!isEditing}
            />
          </div>

          <div className={styles.infoCard}>
            <div className={styles.infoLabel}>Teacher In-Charge</div>
            <input
              type="text"
              className={styles.infoValue}
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Decorative Chemistry Elements - Bottom */}
        <div className={styles.decorBottom}>
          <svg className={styles.flask} viewBox="0 0 100 100">
            <path d="M40,10 L40,40 L20,80 L80,80 L60,40 L60,10 Z"
                  fill="none" stroke="#4ECDC4" strokeWidth="3" />
            <rect x="35" y="5" width="30" height="8" fill="none" stroke="#4ECDC4" strokeWidth="3" />
            <ellipse cx="50" cy="70" rx="15" ry="8" fill="#4ECDC4" opacity="0.3" />
          </svg>

          <svg className={styles.atom} viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="6" fill="#FFE66D" />
            <ellipse cx="50" cy="50" rx="30" ry="15" fill="none"
                     stroke="#FFE66D" strokeWidth="2" />
            <ellipse cx="50" cy="50" rx="30" ry="15" fill="none"
                     stroke="#FFE66D" strokeWidth="2" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="30" ry="15" fill="none"
                     stroke="#FFE66D" strokeWidth="2" transform="rotate(120 50 50)" />
          </svg>
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.academicYear}>Academic Year 2024-2025</div>
        </div>

        {/* Background Pattern */}
        <div className={styles.bgPattern}></div>
      </div>

      {/* Control Buttons */}
      <div className={`${styles.controls} no-print`}>
        <button
          className={styles.editBtn}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? '✓ Done Editing' : '✎ Edit Details'}
        </button>
        <button
          className={styles.printBtn}
          onClick={() => window.print()}
        >
          🖨 Print Cover Page
        </button>
      </div>
    </div>
  );
}
