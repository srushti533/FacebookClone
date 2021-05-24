function InputBox() {
  return (
    <div>
      <div>
        <Image
          onClick={signOut}
          className="rounded-full cursor-pointer"
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
        />
      </div>
    </div>
  );
}

export default InputBox;
