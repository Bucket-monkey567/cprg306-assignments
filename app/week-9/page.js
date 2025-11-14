"use client";

// Part 5: landing page starts
import { useUserAuth } from "./_utils/auth-context";
import React, { useState } from "react";
import Link from "next/link";

export default function Page() {
// Use the useUserAuth hook to get the user object and the login and logout functions
const { user, loading, gitHubSignIn, logOut } = useUserAuth();
const firebaseSignOut = logOut;


async function HandleSignIn() {
    try {
        // Sign in to Firebase with GitHub authentication
        await gitHubSignIn();
    } catch (error) {
        console.error("Error signing in: ", error);
    }
}

async function handleSignOut() {
    try {
        // Sign out of Firebase
        await firebaseSignOut();
    } catch (error) {
        console.error("Error signing out: ", error);
    }
}

return (
    <main>
        <h1>Week 9 - Shopping List (Auth)</h1>
        <section>
            {user ? (
                <div>
                    // Display some of the user's information
                    <p>Welcome, {user.displayName} ({user.email}).</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                    <Link href="/week-9/shopping-list">
                        <button>Go to Shopping List</button>
                    </Link>
                </div>
            ) : (
                <div>
                    <p>Please sign in.</p>
                    <button onClick={HandleSignIn}>Sign In with GitHub</button>
                </div>
            )}
        </section>
    </main>
    );
}
// Part 5: landing page ends